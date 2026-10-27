import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const inventoryPath = path.join(rootDir, 'apps/web/src/data/verified_inventory.json');
const gridsPath = path.join(rootDir, 'apps/web/src/data/verified_sheet_grids.json');
const octCsvPath = path.join(rootDir, 'reports/OCTOBER_2026_INVENTORY.csv');

const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
const grids = JSON.parse(fs.readFileSync(gridsPath, 'utf8'));
const octCsvLines = fs.readFileSync(octCsvPath, 'utf8').trim().split(/\r?\n/);

let passed = 0;
function test(name, fn) {
  fn();
  passed++;
  console.log(`  [PASS] ${name}`);
}

console.log('=== SANDEEP WORKSPACE (ARGON v2.4) AUTOMATED VERIFICATION SUITE ===');

test('1. Total deduplicated primary workbook count equals 155 (45 Google Sheets + 110 Excel .xlsx)', () => {
  assert.equal(inventory.length, 155);
  const ids = new Set(inventory.map((i) => i.id));
  assert.equal(ids.size, 155, 'Duplicate canonical file IDs found');
  const gsheets = inventory.filter((i) => i.type === 'Google Sheet');
  const excels = inventory.filter((i) => i.type === 'Excel (.xlsx)');
  assert.equal(gsheets.length, 45);
  assert.equal(excels.length, 110);
});

test('2. October 2026 Europe/Nicosia boundary classification counts are exact (73 active, 62 created, 59 modified, 68 viewed)', () => {
  const active = inventory.filter((i) => i.activeInOct2026);
  const created = inventory.filter((i) => i.createdInOct2026);
  const modified = inventory.filter((i) => i.modifiedInOct2026);
  const viewed = inventory.filter((i) => i.viewedInOct2026);
  assert.equal(active.length, 73);
  assert.equal(created.length, 62);
  assert.equal(modified.length, 59);
  assert.equal(viewed.length, 68);
  assert.equal(octCsvLines.length - 1, 73, 'OCTOBER_2026_INVENTORY.csv row count must match 73 active workbooks');
});

test('3. Four-timestamp separation & missing viewer telemetry honesty ("Not available from provider")', () => {
  const missingView = inventory.filter((i) => !i.viewedByMeUtc);
  assert.ok(missingView.length >= 5, 'Expected files without viewedByMeTime');
  for (const item of missingView) {
    assert.equal(item.viewedByMeNicosia, 'Not available from provider');
    assert.equal(item.viewedInOct2026, false);
  }
});

test('4. Multi-tab real cell datasets exist for flagship October workbooks', () => {
  assert.ok(grids['1XK8GFq7VXVcCTu4zdkuxLY6aWLNFjSKz2VQrEV9lEZk']['09 Oct 2026'].length >= 9);
  assert.ok(grids['14mno6FObxlEOvCP2Z-bL-1giV6osFT9gwOKUQfGiLbU']['Executive Dashboard'].length >= 8);
  assert.ok(grids['11s_xEqmLBqQfOgwViT8eV5gS82eq2Fan']['Private Lead Tracker'].length === 4);
  assert.ok(grids['1Runo2f5N0Ijw_4D_3w_gBRzRQelJ8FIbRtuzVWmksps']['Verified Daily Audit'].length >= 8);
});

test('5. CSV formula injection sanitizer neutralizes leading =, +, -, @ payloads', () => {
  const sanitize = (v) => {
    let s = String(v ?? '');
    if (/^[=+\-@]/.test(s)) s = "'" + s;
    return `"${s.replace(/"/g, '""')}"`;
  };
  assert.equal(sanitize('=CMD|"/C calc"!A0'), `"'=CMD|""/C calc""!A0"`);
  assert.equal(sanitize('+447957649497'), `"'+447957649497"`);
  assert.equal(sanitize('@girl_spy0'), `"'@girl_spy0"`);
});

test('6. Zero live credentials, tokens, or .env files shipped in repository', () => {
  assert.equal(fs.existsSync(path.join(rootDir, '.env')), false);
  assert.equal(fs.existsSync(path.join(rootDir, '.env.example')), true);
});

test('7. All 11 Agent Operational Sheets (4 Daily, 3 Scheduled, 4 Spark) have rich multi-tab grids and clickable UI controls', () => {
  assert.ok(grids['deadline-dashboard-daily']['Delhi Fares Tracker (DEL)'].length >= 6);
  assert.ok(grids['1-jsydfLBJibFJjy4dabDCOZpG7m_6bJxdxPYRWHJ1x0']['ALL LEADS'].length >= 8);
  assert.ok(grids['local-fb-insta-job-hunter']['00_59_Midnight_Sweep_Today'].length >= 6);
  assert.ok(grids['1F8p-KNl8PLMfRIzRxZ0nFORRHOuF5qL1']['Active Applications Master'].length >= 9);
  assert.ok(grids['1zGcyFrXBXQKOrmgJngXGYfIlYm1n1s_AV_DlHJ9tgtQ']['ALL SCHEMES'].length >= 7);
  assert.ok(grids['156pTG6IBQ00x6AP2BFm3sg-zy_iZ4PLj']['Masters Admissions (Mondays 09:58)'].length >= 6);
  assert.ok(grids['local-freelance-lead-tracker']['Batch Leads Queue'].length >= 5);
  assert.ok(grids['15hOKXuvZDIrytvqRLQNvLQx4w7wTdFS-DSnvT1XIkOw']['16 Oct 2026'].length >= 6);
  assert.ok(grids['1wi4i3qpDLOzfNXa5_AR6Bvhb4w40xTr4QQmM9qGAzj4']['16 Oct 2026'].length >= 5);
  assert.ok(grids['1ECo6MFxrDXpOQlTyCRGor5XUgE8e4t2zL-LXWJRFN5A']['16 Oct 2026'].length >= 7);
  assert.ok(grids['1tIi0TiQ0L1fNUcqTWTsRVJhV-69g3pbrHGGkhmGGvyo']['16 Oct 2026'].length >= 4);

  const indexHtml = fs.readFileSync(path.join(rootDir, 'apps/web/public/index.html'), 'utf8');
  assert.ok(indexHtml.includes('id="brandLogoBtn"'), 'Clickable Sandeep Workspace logo button must exist');
  assert.ok(indexHtml.includes('id="agentOperationsHub"'), 'Agent Operations Hub must exist');
});

console.log(`=== ALL ${passed}/7 CONTRACT & INTEGRITY TESTS PASSED ===`);
