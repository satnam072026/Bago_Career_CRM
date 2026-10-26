export type ProviderType =
  | 'GOOGLE_SHEETS'
  | 'GOOGLE_DRIVE_XLSX'
  | 'GOOGLE_DRIVE_CSV'
  | 'MICROSOFT_GRAPH_EXCEL'
  | 'LOCAL_IMPORT_REPLICA';

export type SyncMode =
  | 'READ_ONLY'
  | 'EDITABLE_API'
  | 'REPLICA_ONLY'
  | 'ERROR_ZERO_BYTE';

export interface WorkbookRecord {
  id: string;
  title: string;
  type: 'Google Sheet' | 'Excel (.xlsx)' | 'CSV';
  extension: string;
  mimeType: string;
  provider: string;
  account: string;
  owner: string;
  ownership: string;
  workspace: string;
  folderPath: string;
  parentId: string;
  createdUtc: string;
  modifiedUtc: string;
  viewedByMeUtc: string;
  createdNicosia: string;
  modifiedNicosia: string;
  viewedByMeNicosia: string;
  firstIndexedUtc: string;
  lastSyncedUtc: string;
  createdInOct2026: boolean;
  modifiedInOct2026: boolean;
  viewedInOct2026: boolean;
  activeInOct2026: boolean;
  activityReason: string;
  tabs: string[];
  tabCount: number;
  fileSize: number;
  readOnly: boolean;
  accessRole: string;
  syncMode: string;
  syncStatus: string;
  viewUrl: string;
}

/**
 * 1 October 2026 00:00:00 in Europe/Nicosia (EEST, UTC+3) equals 2026-09-30T21:00:00.000Z.
 */
export const OCT_2026_START_NICOSIA_UTC_MS = Date.parse('2026-09-30T21:00:00.000Z');

export function isWithinOctober2026Nicosia(
  isoUtc: string | null | undefined,
  scanExecutionUtcMs: number = Date.parse('2026-10-26T21:38:00.000Z')
): boolean {
  if (!isoUtc) return false;
  const ms = Date.parse(isoUtc);
  if (Number.isNaN(ms)) return false;
  return ms >= OCT_2026_START_NICOSIA_UTC_MS && ms <= scanExecutionUtcMs;
}

export function deduplicateWorkbooksById<T extends { id: string }>(items: T[]): {
  unique: T[];
  duplicatesRemoved: number;
} {
  const seen = new Map<string, T>();
  let duplicatesRemoved = 0;
  for (const item of items) {
    if (seen.has(item.id)) {
      duplicatesRemoved++;
    } else {
      seen.set(item.id, item);
    }
  }
  return { unique: Array.from(seen.values()), duplicatesRemoved };
}

export function sanitizeCsvCellForExport(value: unknown): string {
  let str = String(value ?? '');
  if (/^[=+\-@]/.test(str)) {
    str = "'" + str;
  }
  return `"${str.replace(/"/g, '""')}"`;
}
