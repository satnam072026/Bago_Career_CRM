import { google } from 'googleapis';

export class ETagConflictError extends Error {
  constructor(
    message: string,
    public readonly expectedRevision: string,
    public readonly remoteRevision: string
  ) {
    super(message);
    this.name = 'ETagConflictError';
  }
}

export interface GoogleWriteCellInput {
  accessToken: string;
  spreadsheetId: string;
  a1Range: string;
  values: (string | number | boolean)[][];
  expectedRevisionId?: string;
  writeBackUnlocked: boolean;
}

/**
 * Non-destructive Google Sheets API v4 range update with revision/ETag verification.
 * Never replaces the whole workbook file.
 */
export async function updateGoogleSheetRangeSafely(input: GoogleWriteCellInput) {
  if (!input.writeBackUnlocked) {
    throw new Error('Write-back rejected: Workbook is locked in Read-Only Safe Mode.');
  }
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: input.accessToken });

  const drive = google.drive({ version: 'v3', auth });
  const fileMeta = await drive.files.get({
    fileId: input.spreadsheetId,
    fields: 'id, mimeType, headRevisionId, capabilities(canEdit)',
  });

  if (fileMeta.data.mimeType !== 'application/vnd.google-apps.spreadsheet') {
    throw new Error(
      `Lossy write-back blocked: File ${input.spreadsheetId} has mimeType ${fileMeta.data.mimeType}. Binary .xlsx files on Drive open in Read-Only / Replica mode.`
    );
  }
  if (fileMeta.data.capabilities && fileMeta.data.capabilities.canEdit === false) {
    throw new Error('Permission denied: Authenticated user does not have edit rights on this workbook.');
  }
  if (
    input.expectedRevisionId &&
    fileMeta.data.headRevisionId &&
    fileMeta.data.headRevisionId !== input.expectedRevisionId
  ) {
    throw new ETagConflictError(
      'Remote workbook was modified since your last sync. Reload or stage a replica.',
      input.expectedRevisionId,
      fileMeta.data.headRevisionId
    );
  }

  const sheets = google.sheets({ version: 'v4', auth });
  const res = await sheets.spreadsheets.values.update({
    spreadsheetId: input.spreadsheetId,
    range: input.a1Range,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: input.values },
  });

  return {
    updatedCells: res.data.updatedCells ?? 0,
    updatedRange: res.data.updatedRange ?? input.a1Range,
  };
}

/**
 * Microsoft Graph Excel Workbook Range Adapter (requires Files.ReadWrite OAuth consent).
 */
export async function updateMicrosoftGraphExcelRangeSafely(params: {
  accessToken: string;
  driveItemId: string;
  worksheetName: string;
  address: string;
  values: (string | number | boolean)[][];
  workbookSessionId: string;
  ifMatchEtag?: string;
}) {
  const url = `https://graph.microsoft.com/v1.0/me/drive/items/${encodeURIComponent(
    params.driveItemId
  )}/workbook/worksheets/${encodeURIComponent(
    params.worksheetName
  )}/range(address='${params.address}')`;

  const headers: Record<string, string> = {
    Authorization: `Bearer ${params.accessToken}`,
    'Content-Type': 'application/json',
    'workbook-session-id': params.workbookSessionId,
  };
  if (params.ifMatchEtag) {
    headers['If-Match'] = params.ifMatchEtag;
  }

  const res = await fetch(url, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({ values: params.values }),
  });
  if (res.status === 412) {
    throw new ETagConflictError('Microsoft Graph ETag mismatch (HTTP 412 Precondition Failed)', params.ifMatchEtag ?? '', 'remote');
  }
  if (!res.ok) {
    throw new Error(`Microsoft Graph range PATCH failed with status ${res.status}`);
  }
  return res.json();
}
