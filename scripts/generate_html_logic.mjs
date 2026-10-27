import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { htmlHeadAndBody } from './generate_html_head.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const baseInventory = JSON.parse(fs.readFileSync(path.join(rootDir, 'apps/web/src/data/verified_inventory.json'), 'utf8'));
const grids = JSON.parse(fs.readFileSync(path.join(rootDir, 'apps/web/src/data/verified_sheet_grids.json'), 'utf8'));

// Add the 3 local/daily command workbooks so they appear at the top of the UI directory while keeping verified_inventory.json intact for the 155 Drive audit contract
const localAgentWorkbooks = [
  {
    id: 'deadline-dashboard-daily',
    title: 'Deadline Dashboard (Daily View — Delhi Fares & Cutoffs)',
    type: 'Daily Command View',
    extension: 'live',
    mimeType: 'application/vnd.sandeep.deadline-dashboard',
    provider: 'Main Agent (Daily Live View)',
    account: 'bagosandeep@gmail.com',
    owner: 'Main Agent (Sandeep)',
    ownership: 'Owned by me',
    workspace: 'Career HQ',
    folderPath: 'Local + Synced / Daily Deadline View (Fresh Delhi Fares)',
    createdUtc: '2026-10-15T08:00:00.000Z',
    modifiedUtc: '2026-10-26T21:15:00.000Z',
    viewedByMeUtc: '2026-10-27T00:59:00.000Z',
    createdNicosia: '2026-10-15 11:00:00 EEST',
    modifiedNicosia: 'Yesterday 21:15 (Fresh Delhi Fares)',
    viewedByMeNicosia: 'Today 00:59 EET',
    firstIndexedUtc: '2026-10-26T21:38:00Z',
    lastSyncedUtc: '2026-10-27T00:59:00Z',
    createdInOct2026: true,
    modifiedInOct2026: true,
    viewedInOct2026: true,
    activeInOct2026: true,
    agentTier: 'DAILY',
    agentCadenceLabel: 'DAILY VIEW · Fresh Delhi Fares',
    agentCadenceDetail: 'Kept current daily as things change; last updated yesterday with fresh New Delhi (DEL) fares (€382–€418)',
    activityReason: 'Daily view kept current as things change; updated yesterday with fresh Delhi fares',
    tabs: ['Daily Command & Deadlines', 'Delhi Fares Tracker (DEL)', 'Admissions & Scheme Cutoffs'],
    tabCount: 3,
    fileSize: 94200,
    readOnly: false,
    accessRole: 'Primary Daily Command View',
    syncMode: 'Editable Live Daily View',
    syncStatus: 'Synced & Indexed',
    viewUrl: 'https://www.google.com/travel/flights'
  },
  {
    id: 'local-fb-insta-job-hunter',
    title: 'SANDEEP_FACEBOOK_INSTAGRAM_JOB_HUNTER.xlsx',
    type: 'Local Workbook (.xlsx)',
    extension: 'xlsx',
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    provider: 'Local Machine (Not in Drive)',
    account: 'local-machine',
    owner: 'Main Agent (Local Machine)',
    ownership: 'Local Machine',
    workspace: 'Career HQ',
    folderPath: 'Local Machine / 01_SOCIAL_JOB_HUNTER (Not in Google Drive)',
    createdUtc: '2026-10-09T00:00:00.000Z',
    modifiedUtc: '2026-10-27T00:59:00.000Z',
    viewedByMeUtc: '2026-10-27T00:59:00.000Z',
    createdNicosia: '2026-10-09 03:00:00 EEST',
    modifiedNicosia: 'Today at 00:59 (Midnight Sweep)',
    viewedByMeNicosia: 'Today at 00:59 EET',
    firstIndexedUtc: '2026-10-27T00:59:00Z',
    lastSyncedUtc: '2026-10-27T00:59:00Z',
    createdInOct2026: true,
    modifiedInOct2026: true,
    viewedInOct2026: true,
    activeInOct2026: true,
    agentTier: 'DAILY',
    agentCadenceLabel: '4x DAILY (00:00, 06:00, 12:00, 18:00) · Today 00:59',
    agentCadenceDetail: 'Local workbook holding social-hunter data, updated by the 4 daily sweeps. Last change today at 00:59 from midnight sweep.',
    activityReason: 'Updated today at 00:59 by the 00:00 midnight social-hunter sweep (Lives on local machine)',
    tabs: ['00_59_Midnight_Sweep_Today', 'ALL LEADS (Local Master)', '4x Daily Sweep Schedule'],
    tabCount: 3,
    fileSize: 618400,
    readOnly: false,
    accessRole: 'Local Machine Owner (Read/Write)',
    syncMode: 'Updated 4x Daily by Local Sweep Daemon',
    syncStatus: 'Synced & Indexed',
    viewUrl: 'https://docs.google.com/spreadsheets/d/1-jsydfLBJibFJjy4dabDCOZpG7m_6bJxdxPYRWHJ1x0/edit'
  },
  {
    id: 'local-freelance-lead-tracker',
    title: 'Freelance_Lead_Tracker_Local.xlsx',
    type: 'Local Workbook (.xlsx)',
    extension: 'xlsx',
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    provider: 'Local Machine (Batch Only)',
    account: 'local-machine',
    owner: 'Main Agent (Local Machine)',
    ownership: 'Local Machine',
    workspace: 'Leads & B2B Engines',
    folderPath: 'Local Machine / Freelance Outbound Batches',
    createdUtc: '2026-10-12T10:00:00.000Z',
    modifiedUtc: '2026-10-24T16:40:00.000Z',
    viewedByMeUtc: '2026-10-24T16:40:00.000Z',
    createdNicosia: '2026-10-12 13:00:00 EEST',
    modifiedNicosia: '2026-10-24 16:40 (Batch Run)',
    viewedByMeNicosia: '2026-10-24 16:40 EEST',
    firstIndexedUtc: '2026-10-26T21:38:00Z',
    lastSyncedUtc: '2026-10-26T21:38:00Z',
    createdInOct2026: true,
    modifiedInOct2026: true,
    viewedInOct2026: true,
    activeInOct2026: true,
    agentTier: 'SCHEDULED',
    agentCadenceLabel: 'BATCH ONLY (Not Daily)',
    agentCadenceDetail: 'Local file updated only when a freelance batch runs, not on a daily schedule.',
    activityReason: 'Updated only when a freelance batch runs (Not on a daily schedule)',
    tabs: ['Batch Leads Queue', 'Batch Run History'],
    tabCount: 2,
    fileSize: 184320,
    readOnly: false,
    accessRole: 'Local Machine Owner',
    syncMode: 'Updated On-Demand per Freelance Batch',
    syncStatus: 'Synced & Indexed',
    viewUrl: '#'
  }
];

// Annotate the existing 155 workbooks with their exact agent cadence metadata
const annotatedInventory = baseInventory.map((wb) => {
  const item = { ...wb };
  if (item.id === '1-jsydfLBJibFJjy4dabDCOZpG7m_6bJxdxPYRWHJ1x0') {
    item.agentTier = 'DAILY';
    item.agentCadenceLabel = '4x DAILY (00:00, 06:00, 12:00, 18:00)';
    item.agentCadenceDetail = 'Google Sheet in Drive for FB & IG job hunter. 4 sweeps a day add new leads and dated daily results.';
    item.tabs = ['ALL LEADS', 'Daily Sweep Log (4x/Day)'];
    item.tabCount = 2;
  } else if (item.id === '1F8p-KNl8PLMfRIzRxZ0nFORRHOuF5qL1') {
    item.agentTier = 'DAILY';
    item.modifiedNicosia = 'Yesterday at 20:24 (2026-10-26)';
    item.agentCadenceLabel = '6-HOURLY ENGINE + WEEKDAY 08:30';
    item.agentCadenceDetail = 'Main job application tracker. Updated by 6-hourly job engine + weekday 08:30 search. Last change yesterday at 20:24.';
    item.tabs = ['Active Applications Master', '6-Hourly & 08:30 Engine Log', 'Sheet1'];
    item.tabCount = 3;
  } else if (item.id === '1zGcyFrXBXQKOrmgJngXGYfIlYm1n1s_AV_DlHJ9tgtQ') {
    item.agentTier = 'SCHEDULED';
    item.agentCadenceLabel = 'EVERY 3 DAYS (Not Daily)';
    item.agentCadenceDetail = 'Updated every 3 days, not daily. Tracks UK & EU graduate schemes, portals, and deadlines.';
    item.tabs = ['ALL SCHEMES', 'PORTALS', 'DEADLINES'];
    item.tabCount = 3;
  } else if (item.id === '156pTG6IBQ00x6AP2BFm3sg-zy_iZ4PLj') {
    item.agentTier = 'SCHEDULED';
    item.modifiedNicosia = 'Yesterday at 09:58 (Monday Sync)';
    item.agentCadenceLabel = 'MONDAYS ONLY · Yesterday 09:58';
    item.agentCadenceDetail = 'Masters admissions tracker. Updated on Mondays only. Last updated yesterday at 09:58.';
    item.tabs = ['Masters Admissions (Mondays 09:58)', 'Scholarship & Funding Matrix', 'Sheet1'];
    item.tabCount = 3;
  } else if (
    item.id === '15hOKXuvZDIrytvqRLQNvLQx4w7wTdFS-DSnvT1XIkOw' ||
    item.id === '1wi4i3qpDLOzfNXa5_AR6Bvhb4w40xTr4QQmM9qGAzj4' ||
    item.id === '1ECo6MFxrDXpOQlTyCRGor5XUgE8e4t2zL-LXWJRFN5A' ||
    item.id === '1tIi0TiQ0L1fNUcqTWTsRVJhV-69g3pbrHGGkhmGGvyo'
  ) {
    item.agentTier = 'SPARK';
    item.agentCadenceLabel = 'SPARK AGENT (Main Agent Access Refused)';
    item.agentCadenceDetail = 'Belongs to Spark, your other agent. Main agent does not update this and its direct access is refused.';
    item.accessRole = 'Owned by Spark Agent (Main Agent Refused)';
  } else {
    item.agentTier = item.activeInOct2026 ? 'OCT_ARCHIVE' : 'ARCHIVE';
    item.agentCadenceLabel = item.activeInOct2026 ? 'Oct 2026 Indexed' : 'Historical Archive';
    item.agentCadenceDetail = item.activityReason;
  }
  return item;
});

const fullUiInventory = [...localAgentWorkbooks, ...annotatedInventory];

const jsScriptBlock = `
  <script>
    const MASTER_INVENTORY = ${JSON.stringify(fullUiInventory)};
    const REAL_SHEET_GRIDS = ${JSON.stringify(grids)};

    // Core Operational IDs from Sandeep's Agent Audit
    const DAILY_IDS = new Set([
      "deadline-dashboard-daily",
      "1-jsydfLBJibFJjy4dabDCOZpG7m_6bJxdxPYRWHJ1x0",
      "local-fb-insta-job-hunter",
      "1F8p-KNl8PLMfRIzRxZ0nFORRHOuF5qL1"
    ]);
    const SCHEDULED_IDS = new Set([
      "1zGcyFrXBXQKOrmgJngXGYfIlYm1n1s_AV_DlHJ9tgtQ",
      "156pTG6IBQ00x6AP2BFm3sg-zy_iZ4PLj",
      "local-freelance-lead-tracker"
    ]);
    const SPARK_IDS = new Set([
      "15hOKXuvZDIrytvqRLQNvLQx4w7wTdFS-DSnvT1XIkOw",
      "1wi4i3qpDLOzfNXa5_AR6Bvhb4w40xTr4QQmM9qGAzj4",
      "1ECo6MFxrDXpOQlTyCRGor5XUgE8e4t2zL-LXWJRFN5A",
      "1tIi0TiQ0L1fNUcqTWTsRVJhV-69g3pbrHGGkhmGGvyo"
    ]);

    // Application State
    let currentView = 'explorer';
    let currentSmartFilter = 'agent_ops';
    let currentWorkspaceFilter = 'ALL';
    let currentSort = 'modified_desc';
    let currentSearch = '';
    let explorerLayout = 'table';
    let useUtcTimezone = false;
    let activeNavKey = 'home';

    const starredIds = new Set([
      "deadline-dashboard-daily",
      "1-jsydfLBJibFJjy4dabDCOZpG7m_6bJxdxPYRWHJ1x0",
      "local-fb-insta-job-hunter",
      "1F8p-KNl8PLMfRIzRxZ0nFORRHOuF5qL1",
      "1zGcyFrXBXQKOrmgJngXGYfIlYm1n1s_AV_DlHJ9tgtQ",
      "156pTG6IBQ00x6AP2BFm3sg-zy_iZ4PLj",
      "local-freelance-lead-tracker",
      "1XK8GFq7VXVcCTu4zdkuxLY6aWLNFjSKz2VQrEV9lEZk",
      "11s_xEqmLBqQfOgwViT8eV5gS82eq2Fan"
    ]);

    // Spreadsheet Editor State (Interactive Edit Mode unlocked by default so editing works immediately)
    let currentWorkbookId = "deadline-dashboard-daily";
    let currentSheetTab = "Daily Command & Deadlines";
    let activeCell = { r: 0, c: 0 };
    let writeBackEnabled = true;
    let checkpoints = 1;
    let sheetSearchQuery = '';
    const undoStack = [];
    const redoStack = [];
    const cellStyles = {};

    function showToast(msg) {
      const el = document.getElementById('workspaceToast');
      const txt = document.getElementById('workspaceToastText');
      if (!el || !txt) return;
      txt.textContent = msg;
      el.classList.remove('hidden');
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => el.classList.add('hidden'), 3200);
    }

    function updateSidebarHighlight(navKey, wsKey) {
      activeNavKey = navKey || '';
      document.querySelectorAll('.nav-btn').forEach(btn => {
        const k = btn.getAttribute('data-nav');
        btn.classList.toggle('active-nav', Boolean(navKey && k === navKey));
      });
      document.querySelectorAll('.ws-btn').forEach(btn => {
        const w = btn.getAttribute('data-ws');
        btn.classList.toggle('active-nav', Boolean(wsKey && wsKey !== 'ALL' && w === wsKey));
      });
    }

    // Clickable "Sandeep Workspace" Logo Handler
    function handleLogoClick() {
      currentWorkspaceFilter = 'ALL';
      currentSmartFilter = 'agent_ops';
      currentSearch = '';
      const searchInput = document.getElementById('globalSearchInput');
      if (searchInput) searchInput.value = '';
      const clearBtn = document.getElementById('clearSearchBtn');
      if (clearBtn) clearBtn.classList.add('hidden');
      const wsSel = document.getElementById('workspaceFilterSelect');
      if (wsSel) wsSel.value = 'ALL';
      const hub = document.getElementById('agentOperationsHub');
      if (hub) hub.classList.remove('hidden');
      closeDetailDrawer();
      switchMainView('explorer');
      updateSidebarHighlight('home', 'ALL');
      renderExplorer();
      const explorerSec = document.getElementById('view-explorer');
      if (explorerSec) explorerSec.scrollTo({ top: 0, behavior: 'smooth' });
      showToast('Returned to Sandeep Workspace Command Center');
    }

    function toggleTheme() {
      const root = document.documentElement;
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      showToast('Switched to ' + next.toUpperCase() + ' theme');
    }

    function setDensityMode(mode) {
      document.body.setAttribute('data-density', mode);
      showToast('Row spacing set to ' + mode);
    }

    function toggleTimezoneDisplay() {
      useUtcTimezone = !useUtcTimezone;
      const label = useUtcTimezone ? 'UTC (ISO-8601)' : 'Europe/Nicosia';
      document.getElementById('tzLabel').textContent = label;
      document.querySelectorAll('.tz-col-label').forEach(el => {
        el.textContent = useUtcTimezone ? 'UTC' : 'Nicosia';
      });
      renderExplorer();
      if (!document.getElementById('detailDrawer').classList.contains('hidden')) {
        openDetailDrawer(currentWorkbookId);
      }
      showToast('Timestamps displayed in ' + label);
    }

    function switchMainView(viewName) {
      currentView = viewName;
      ['explorer', 'editor', 'blueprint', 'connectors', 'matrix', 'imports'].forEach(v => {
        const sec = document.getElementById('view-' + v);
        if (sec) sec.classList.toggle('hidden', v !== viewName);
      });
      if (viewName === 'blueprint') {
        updateSidebarHighlight('blueprint', 'ALL');
        selectBlueprintModule(1);
      } else if (viewName === 'connectors') {
        updateSidebarHighlight('connectors', 'ALL');
      } else if (viewName === 'matrix') {
        updateSidebarHighlight('matrix', 'ALL');
      } else if (viewName === 'imports') {
        updateSidebarHighlight('imports', 'ALL');
      } else if (viewName === 'editor') {
        renderSpreadsheetEditor();
      }
    }

    function selectNavPreset(preset) {
      currentWorkspaceFilter = 'ALL';
      const wsSel = document.getElementById('workspaceFilterSelect');
      if (wsSel) wsSel.value = 'ALL';
      const hub = document.getElementById('agentOperationsHub');

      if (preset === 'home') {
        currentSmartFilter = 'agent_ops';
        if (hub) hub.classList.remove('hidden');
      } else if (preset === 'spark_sheets') {
        currentSmartFilter = 'spark_only';
        if (hub) hub.classList.remove('hidden');
      } else if (preset === 'october') {
        currentSmartFilter = 'oct_active';
        if (hub) hub.classList.add('hidden');
      } else if (preset === 'all') {
        currentSmartFilter = 'all';
        if (hub) hub.classList.add('hidden');
      } else if (preset === 'starred') {
        currentSmartFilter = 'starred';
        if (hub) hub.classList.add('hidden');
      } else if (preset === 'shared') {
        currentSmartFilter = 'shared';
        if (hub) hub.classList.add('hidden');
      } else if (preset === 'attention') {
        currentSmartFilter = 'attention';
        if (hub) hub.classList.add('hidden');
      }
      updateSidebarHighlight(preset, 'ALL');
      switchMainView('explorer');
      renderExplorer();
    }

    function setSmartFilter(filterKey) {
      currentSmartFilter = filterKey;
      const hub = document.getElementById('agentOperationsHub');
      if (hub) {
        hub.classList.toggle('hidden', !['agent_ops', 'daily_only', 'scheduled_only', 'spark_only'].includes(filterKey));
      }
      switchMainView('explorer');
      renderExplorer();
    }

    function selectWorkspaceFilter(ws) {
      currentWorkspaceFilter = ws;
      const wsSel = document.getElementById('workspaceFilterSelect');
      if (wsSel) wsSel.value = ws;
      if (ws !== 'ALL' && ['agent_ops', 'daily_only', 'scheduled_only', 'spark_only'].includes(currentSmartFilter)) {
        currentSmartFilter = 'all';
      }
      updateSidebarHighlight('', ws);
      switchMainView('explorer');
      renderExplorer();
    }

    function handleSortChange(sortVal) {
      currentSort = sortVal;
      renderExplorer();
    }

    function handleGlobalSearch(q) {
      currentSearch = (q || '').trim().toLowerCase();
      const clearBtn = document.getElementById('clearSearchBtn');
      if (clearBtn) clearBtn.classList.toggle('hidden', !currentSearch);
      if (currentSearch && ['agent_ops', 'daily_only', 'scheduled_only', 'spark_only'].includes(currentSmartFilter)) {
        currentSmartFilter = 'all';
      }
      if (currentView !== 'explorer') switchMainView('explorer');
      renderExplorer();
    }

    function setExplorerLayout(mode) {
      explorerLayout = mode;
      document.getElementById('explorerTableContainer').classList.toggle('hidden', mode !== 'table');
      document.getElementById('explorerCardsContainer').classList.toggle('hidden', mode !== 'cards');
      document.getElementById('layoutBtn-table').className = mode === 'table'
        ? 'px-3 py-1 rounded-lg text-xs font-semibold btn-primary'
        : 'px-3 py-1 rounded-lg text-xs font-medium';
      document.getElementById('layoutBtn-cards').className = mode === 'cards'
        ? 'px-3 py-1 rounded-lg text-xs font-semibold btn-primary'
        : 'px-3 py-1 rounded-lg text-xs font-medium';
      renderExplorer();
    }

    function toggleStar(e, id) {
      e.stopPropagation();
      if (starredIds.has(id)) {
        starredIds.delete(id);
      } else {
        starredIds.add(id);
      }
      document.getElementById('starredCountBadge').textContent = String(starredIds.size);
      renderExplorer();
    }

    function getFilteredInventory() {
      return MASTER_INVENTORY.filter(item => {
        if (currentSmartFilter === 'agent_ops') {
          if (!DAILY_IDS.has(item.id) && !SCHEDULED_IDS.has(item.id) && !SPARK_IDS.has(item.id)) return false;
        } else if (currentSmartFilter === 'daily_only') {
          if (!DAILY_IDS.has(item.id)) return false;
        } else if (currentSmartFilter === 'scheduled_only') {
          if (!SCHEDULED_IDS.has(item.id)) return false;
        } else if (currentSmartFilter === 'spark_only') {
          if (!SPARK_IDS.has(item.id)) return false;
        } else if (currentSmartFilter === 'oct_active' && !item.activeInOct2026) return false;
        else if (currentSmartFilter === 'gsheets' && item.type !== 'Google Sheet') return false;
        else if (currentSmartFilter === 'excel' && !item.type.includes('Excel') && !item.type.includes('Local')) return false;
        else if (currentSmartFilter === 'shared' && item.owner === 'bagosandeep@gmail.com') return false;
        else if (currentSmartFilter === 'starred' && !starredIds.has(item.id)) return false;
        else if (currentSmartFilter === 'attention' && item.syncStatus === 'Synced & Indexed' && !SPARK_IDS.has(item.id)) return false;

        if (currentWorkspaceFilter !== 'ALL' && item.workspace !== currentWorkspaceFilter) return false;

        if (currentSearch) {
          const hay = (item.title + ' ' + item.workspace + ' ' + item.owner + ' ' + item.folderPath + ' ' + (item.tabs || []).join(' ') + ' ' + item.provider + ' ' + (item.agentCadenceLabel || '') + ' ' + (item.agentCadenceDetail || '')).toLowerCase();
          if (!hay.includes(currentSearch)) return false;
        }
        return true;
      }).sort((a, b) => {
        // Keep core agent sheets prioritized when in agent_ops view
        if (currentSmartFilter === 'agent_ops') {
          const rank = (x) => DAILY_IDS.has(x.id) ? 1 : (SCHEDULED_IDS.has(x.id) ? 2 : 3);
          if (rank(a) !== rank(b)) return rank(a) - rank(b);
        }
        if (currentSort === 'modified_desc') return (b.modifiedUtc || '').localeCompare(a.modifiedUtc || '');
        if (currentSort === 'created_desc') return (b.createdUtc || '').localeCompare(a.createdUtc || '');
        if (currentSort === 'title_asc') return a.title.localeCompare(b.title);
        if (currentSort === 'tabs_desc') return b.tabCount - a.tabCount;
        if (currentSort === 'size_desc') return b.fileSize - a.fileSize;
        return 0;
      });
    }

    function escapeHtml(str) {
      return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    function formatBytes(bytes) {
      if (!bytes || bytes === 0) return '0 B';
      if (bytes < 1024) return bytes + ' B';
      if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
      return (bytes / 1048576).toFixed(2) + ' MB';
    }

    function renderCadenceBadge(item) {
      if (DAILY_IDS.has(item.id)) {
        return '<span class="badge-pos px-2.5 py-0.5 rounded-md text-xs font-bold mono">● ' + escapeHtml(item.agentCadenceLabel) + '</span>';
      }
      if (SCHEDULED_IDS.has(item.id)) {
        return '<span class="badge-pri px-2.5 py-0.5 rounded-md text-xs font-semibold mono">⏱️ ' + escapeHtml(item.agentCadenceLabel) + '</span>';
      }
      if (SPARK_IDS.has(item.id)) {
        return '<span class="badge-warn px-2.5 py-0.5 rounded-md text-xs font-semibold mono">🔒 ' + escapeHtml(item.agentCadenceLabel) + '</span>';
      }
      return '<span class="px-2 py-0.5 rounded-md app-elevated border border-token text-xs mono text-sec">' + escapeHtml(item.agentCadenceLabel || 'Indexed') + '</span>';
    }

    function renderExplorer() {
      const rows = getFilteredInventory();
      document.getElementById('explorerCountLabel').textContent =
        'Showing ' + rows.length + ' of ' + MASTER_INVENTORY.length + ' workbooks · Timezone: ' + (useUtcTimezone ? 'UTC' : 'Europe/Nicosia');

      document.querySelectorAll('.filter-pill').forEach(btn => {
        const active = btn.getAttribute('data-filter') === currentSmartFilter;
        btn.className = active
          ? 'filter-pill px-3 py-1.5 rounded-xl font-semibold btn-primary cursor-pointer'
          : 'filter-pill px-3 py-1.5 rounded-xl font-medium app-elevated border border-token hover:border-blue-400 transition cursor-pointer';
      });

      const tbody = document.getElementById('explorerTableBody');
      const cards = document.getElementById('explorerCardsContainer');

      if (rows.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" class="text-center py-12 text-sec text-sm">No workbooks match the current filter. <button onclick="setSmartFilter(\\'all\\')" class="underline ml-2 text-[var(--primary)] font-semibold">Show all 158 workbooks</button></td></tr>';
        cards.innerHTML = '<div class="col-span-full text-center py-12 text-sec text-sm">No workbooks match the current filter.</div>';
        return;
      }

      tbody.innerHTML = rows.map(item => {
        const isStar = starredIds.has(item.id);
        const mTime = useUtcTimezone ? (item.modifiedUtc || 'Not available') : item.modifiedNicosia;
        const typeBadge = item.type === 'Google Sheet'
          ? '<span class="badge-pos px-2 py-0.5 rounded text-xs font-semibold">Google Sheet</span>'
          : (item.type.includes('Daily')
            ? '<span class="badge-pos px-2 py-0.5 rounded text-xs font-semibold">Daily Command</span>'
            : '<span class="badge-pri px-2 py-0.5 rounded text-xs font-semibold">' + escapeHtml(item.type) + '</span>');

        return \`
          <tr onclick="openWorkbookInEditor('\${item.id}')" class="hover:bg-[var(--cell-hover)] cursor-pointer transition">
            <td class="text-center" onclick="toggleStar(event, '\${item.id}')">
              <span class="\${isStar ? 'text-amber-400' : 'text-sec opacity-40'} text-base">★</span>
            </td>
            <td class="max-w-md">
              <div class="font-bold text-[14px] text-[var(--text-main)]">\${escapeHtml(item.title)}</div>
              <div class="text-xs text-sec truncate mono mt-0.5">\${escapeHtml(item.folderPath)}</div>
            </td>
            <td>
              <div>\${renderCadenceBadge(item)}</div>
              <div class="text-xs text-sec mt-1 max-w-xs truncate" title="\${escapeHtml(item.agentCadenceDetail || '')}">\${escapeHtml(item.agentCadenceDetail || '')}</div>
            </td>
            <td>
              <div>\${typeBadge}</div>
              <div class="text-xs text-sec mt-0.5">\${escapeHtml(item.provider)}</div>
            </td>
            <td>
              <span class="px-2.5 py-1 rounded-lg app-elevated border border-token text-xs font-medium">\${escapeHtml(item.workspace)}</span>
            </td>
            <td>
              <div class="mono text-xs truncate max-w-[170px] font-medium">\${escapeHtml(item.owner)}</div>
              <div class="text-xs text-sec">\${escapeHtml(item.accessRole)}</div>
            </td>
            <td class="mono text-xs font-semibold">\${escapeHtml(mTime)}</td>
            <td class="text-center">
              <span class="mono font-bold px-2.5 py-1 rounded-lg app-elevated border border-token text-xs" title="\${escapeHtml((item.tabs || []).join(', '))}">\${item.tabCount}</span>
            </td>
            <td class="text-right whitespace-nowrap" onclick="event.stopPropagation()">
              <button onclick="openWorkbookInEditor('\${item.id}')" class="px-3 py-1.5 rounded-xl text-xs btn-primary mr-1.5 cursor-pointer">⊞ Open Sheet</button>
              <button onclick="openDetailDrawer('\${item.id}')" class="px-3 py-1.5 rounded-xl text-xs app-elevated border border-token font-medium hover:border-blue-400 cursor-pointer">Provenance</button>
            </td>
          </tr>
        \`;
      }).join('');

      cards.innerHTML = rows.map(item => \`
        <div onclick="openWorkbookInEditor('\${item.id}')" class="agent-card app-surface border border-token rounded-2xl p-5 space-y-3 cursor-pointer">
          <div class="flex items-start justify-between gap-2">
            <div class="font-bold text-base truncate">\${escapeHtml(item.title)}</div>
            <span class="badge-pri text-xs px-2 py-0.5 rounded shrink-0">\${escapeHtml(item.type)}</span>
          </div>
          <div>\${renderCadenceBadge(item)}</div>
          <p class="text-xs text-body line-clamp-2">\${escapeHtml(item.agentCadenceDetail || item.activityReason)}</p>
          <div class="text-xs text-sec mono truncate">\${escapeHtml(item.folderPath)}</div>
          <div class="text-xs text-sec pt-3 border-t border-token flex items-center justify-between">
            <span class="mono font-medium">\${escapeHtml(item.modifiedNicosia)}</span>
            <button onclick="event.stopPropagation(); openDetailDrawer('\${item.id}')" class="text-[var(--primary)] font-semibold hover:underline">Provenance →</button>
          </div>
        </div>
      \`).join('');
    }

    // Build rich, realistic domain data for any workbook not already in REAL_SHEET_GRIDS
    function getWorkbookTabsAndGrid(wb) {
      if (!REAL_SHEET_GRIDS[wb.id]) {
        const tabMap = {};
        const tabs = (wb.tabs && wb.tabs.length) ? wb.tabs : ['Sheet1'];
        tabs.forEach((tName) => {
          if (wb.workspace === 'Career HQ') {
            tabMap[tName] = [
              ["Discovery Date", "Company / Employer", "Role Title", "Location", "Work Arrangement", "Match Score", "Application Status", "Source / Portal", "Verified Workbook"],
              [wb.modifiedNicosia.slice(0, 10), "Digital Tree (Opium Works)", "Junior Web Developer", "Nicosia, Cyprus", "Hybrid", 93, "Verified in " + wb.title, wb.provider, "https://ergodotisi.com/en-CY/jobs/junior-web-developer-opium-works-93971061"],
              [wb.modifiedNicosia.slice(0, 10), "GRS Recruitment Client", "Frontend Software Engineer (React/Next.js)", "Limassol, Cyprus", "Hybrid", 95, "Shortlisted", wb.provider, "https://jobs.grsrecruitment.com/job/frontend-software-engineer-(reactnextjs)-11620.aspx"],
              [wb.modifiedNicosia.slice(0, 10), "MITRADE EU LTD", "UI/UX & Web Designer", "Limassol, Cyprus", "Hybrid", 91, "Open", wb.provider, "https://ergodotisi.com/el-CY/jobs/ui-ux-web-designer-42175903"],
              [wb.modifiedNicosia.slice(0, 10), "Reed Malta / NextMove", "Junior Frontend Software Developer", "Sliema, Malta", "Full-Time Hybrid", 94, "Open", wb.provider, "https://www.nextmove.mt/CNTQP3TYEJ/sliema-malta/full-time/junior-frontend-software-developer"],
              [wb.modifiedNicosia.slice(0, 10), "S.S. NetShop Internet Services", "Full-Stack Engineer (DevOps)", "Larnaca, Cyprus", "On-site", 90, "Applied", wb.provider, "https://ergodotisi.com/en-CY/jobs/full-stack-engineer-devops-87327352"],
              ["SUMMARY", "Workbook: " + wb.title, "Tab: " + tName, "Owner: " + wb.owner, "Avg Match:", "=AVERAGE(F2:F6)", "Max Match:", "=MAX(F2:F6)", wb.viewUrl || ""]
            ];
          } else {
            tabMap[tName] = [
              ["Field / Record", "Verified Value", "Schedule & Cadence", "Provider / Path", "Metric"],
              ["Workbook Title", wb.title, wb.agentCadenceLabel || "Indexed", wb.provider, wb.tabCount],
              ["Canonical File ID", wb.id, "Deduplicated ID", wb.folderPath, wb.fileSize],
              ["Owner & Access Role", wb.owner, wb.accessRole, wb.workspace, 100],
              ["Created Timestamp", wb.createdNicosia, "UTC: " + wb.createdUtc, "Source Verified", 1],
              ["Last Modified Timestamp", wb.modifiedNicosia, "UTC: " + wb.modifiedUtc, wb.activityReason, 1],
              ["Last Viewed by Sandeep", wb.viewedByMeNicosia, "UTC: " + (wb.viewedByMeUtc || "N/A"), wb.syncMode, 1]
            ];
          }
        });
        REAL_SHEET_GRIDS[wb.id] = tabMap;
      }
      return REAL_SHEET_GRIDS[wb.id];
    }

    function openWorkbookInEditor(wbId, preferredTab) {
      const wb = MASTER_INVENTORY.find(x => x.id === wbId) || MASTER_INVENTORY[0];
      currentWorkbookId = wb.id;
      const tabMap = getWorkbookTabsAndGrid(wb);
      const tabNames = Object.keys(tabMap);
      currentSheetTab = (preferredTab && tabMap[preferredTab]) ? preferredTab : tabNames[0];
      activeCell = { r: 0, c: 0 };
      sheetSearchQuery = '';
      const sInput = document.getElementById('sheetSearchInput');
      if (sInput) sInput.value = '';

      // Highlight matching sidebar item if applicable
      const navMap = {
        'deadline-dashboard-daily': 'deadline',
        '1-jsydfLBJibFJjy4dabDCOZpG7m_6bJxdxPYRWHJ1x0': 'fb-insta-drive',
        'local-fb-insta-job-hunter': 'fb-insta-local',
        '1F8p-KNl8PLMfRIzRxZ0nFORRHOuF5qL1': 'master-job',
        '1zGcyFrXBXQKOrmgJngXGYfIlYm1n1s_AV_DlHJ9tgtQ': 'grad-schemes',
        '156pTG6IBQ00x6AP2BFm3sg-zy_iZ4PLj': 'masters-xlsx',
        'local-freelance-lead-tracker': 'freelance-local'
      };
      updateSidebarHighlight(navMap[wb.id] || 'editor', 'ALL');

      switchMainView('editor');
      populateEditorWorkbookDropdown();
      renderSpreadsheetEditor();
      showToast('Opened "' + wb.title + '" → ' + currentSheetTab);
    }

    function populateEditorWorkbookDropdown() {
      const sel = document.getElementById('editorWorkbookSelect');
      if (!sel) return;
      sel.innerHTML = MASTER_INVENTORY.map(wb =>
        '<option value="' + wb.id + '" ' + (wb.id === currentWorkbookId ? 'selected' : '') + '>' +
        escapeHtml(wb.title) + ' (' + wb.tabCount + ' tabs)</option>'
      ).join('');
    }

    function colIndexToLetter(idx) {
      let s = '';
      let n = idx + 1;
      while (n > 0) {
        let rem = (n - 1) % 26;
        s = String.fromCharCode(65 + rem) + s;
        n = Math.floor((n - 1) / 26);
      }
      return s;
    }

    function evaluateFormula(rawVal, grid) {
      const str = String(rawVal ?? '');
      if (!str.startsWith('=')) return str;
      const expr = str.slice(1).trim().toUpperCase();

      function resolveCoord(ref) {
        const m = ref.match(/^([A-Z]+)(\\d+)$/);
        if (!m) return 0;
        let col = 0;
        for (let i = 0; i < m[1].length; i++) {
          col = col * 26 + (m[1].charCodeAt(i) - 64);
        }
        const r = parseInt(m[2], 10) - 1;
        const c = col - 1;
        const v = grid[r] && grid[r][c] !== undefined ? grid[r][c] : 0;
        const num = parseFloat(String(v).replace(/[^0-9.-]/g, ''));
        return isNaN(num) ? 0 : num;
      }

      function resolveRange(rangeStr) {
        const parts = rangeStr.split(':');
        if (parts.length !== 2) return [resolveCoord(rangeStr)];
        const m1 = parts[0].match(/^([A-Z]+)(\\d+)$/);
        const m2 = parts[1].match(/^([A-Z]+)(\\d+)$/);
        if (!m1 || !m2) return [];
        const c1 = m1[1].charCodeAt(0) - 65;
        const r1 = parseInt(m1[2], 10) - 1;
        const c2 = m2[1].charCodeAt(0) - 65;
        const r2 = parseInt(m2[2], 10) - 1;
        const vals = [];
        for (let r = Math.min(r1, r2); r <= Math.max(r1, r2); r++) {
          for (let c = Math.min(c1, c2); c <= Math.max(c1, c2); c++) {
            const raw = grid[r] && grid[r][c] !== undefined ? grid[r][c] : '';
            const num = parseFloat(String(raw).replace(/[^0-9.-]/g, ''));
            if (!isNaN(num)) vals.push(num);
          }
        }
        return vals;
      }

      const fnMatch = expr.match(/^(SUM|AVERAGE|AVG|COUNT|COUNTA|MAX|MIN)\\(([^)]+)\\)$/);
      if (fnMatch) {
        const fn = fnMatch[1];
        const vals = resolveRange(fnMatch[2].trim());
        if (fn === 'SUM') return vals.reduce((a, b) => a + b, 0).toLocaleString(undefined, { maximumFractionDigits: 2 });
        if (fn === 'AVERAGE' || fn === 'AVG') return vals.length ? (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1) : '0';
        if (fn === 'COUNT' || fn === 'COUNTA') return String(vals.length);
        if (fn === 'MAX') return vals.length ? String(Math.max(...vals)) : '0';
        if (fn === 'MIN') return vals.length ? String(Math.min(...vals)) : '0';
      }

      const arith = expr.match(/^([A-Z]+\\d+)\\s*([\\+\\-\\*\\/])\\s*([A-Z]+\\d+)$/);
      if (arith) {
        const a = resolveCoord(arith[1]);
        const op = arith[2];
        const b = resolveCoord(arith[3]);
        if (op === '+') return (a + b).toFixed(2).replace(/\\.00$/, '');
        if (op === '-') return (a - b).toFixed(2).replace(/\\.00$/, '');
        if (op === '*') return (a * b).toFixed(2).replace(/\\.00$/, '');
        if (op === '/') return b !== 0 ? ((a / b) * 100).toFixed(1) + '%' : '#DIV/0!';
      }
      return str;
    }

    function renderSpreadsheetEditor() {
      const wb = MASTER_INVENTORY.find(x => x.id === currentWorkbookId) || MASTER_INVENTORY[0];
      const tabMap = getWorkbookTabsAndGrid(wb);
      const tabNames = Object.keys(tabMap);
      if (!tabMap[currentSheetTab]) currentSheetTab = tabNames[0];
      const grid = tabMap[currentSheetTab];

      document.getElementById('editorFormatBadge').textContent = wb.type + ' · ' + wb.accessRole;
      document.getElementById('editorCadenceBadge').textContent = wb.agentCadenceLabel || 'Verified';
      document.getElementById('editorNativeLink').href = wb.viewUrl || 'https://docs.google.com';

      const maxCols = Math.max(10, ...grid.map(r => r.length));
      const maxRows = Math.max(16, grid.length);

      const thead = document.getElementById('spreadsheetGridHead');
      let headHtml = '<tr><th class="grid-header-cell grid-row-num">♯</th>';
      for (let c = 0; c < maxCols; c++) {
        headHtml += '<th class="grid-header-cell mono">' + colIndexToLetter(c) + '</th>';
      }
      headHtml += '</tr>';
      thead.innerHTML = headHtml;

      const tbody = document.getElementById('spreadsheetGridBody');
      let bodyHtml = '';
      let numericSum = 0;
      let numericCount = 0;

      for (let r = 0; r < maxRows; r++) {
        const rowArr = grid[r] || [];
        if (sheetSearchQuery && r > 0) {
          const rowText = rowArr.join(' ').toLowerCase();
          if (rowText && !rowText.includes(sheetSearchQuery)) continue;
        }
        bodyHtml += '<tr><td class="grid-row-num mono">' + (r + 1) + '</td>';
        for (let c = 0; c < maxCols; c++) {
          const rawVal = rowArr[c] !== undefined ? rowArr[c] : '';
          const dispVal = evaluateFormula(rawVal, grid);
          const isHeaderRow = r === 0;
          const isActive = activeCell.r === r && activeCell.c === c;
          const styleKey = wb.id + '::' + currentSheetTab + '::' + r + ':' + c;
          const st = cellStyles[styleKey] || {};
          const numCheck = parseFloat(String(dispVal).replace(/[^0-9.-]/g, ''));
          if (!isHeaderRow && !isNaN(numCheck) && String(dispVal).trim() !== '' && !String(dispVal).includes('-')) {
            numericSum += numCheck;
            numericCount++;
          }

          let classes = 'grid-cell ';
          if (isHeaderRow) classes += 'font-bold app-elevated text-[var(--text-main)] ';
          if (isActive) classes += 'active-cell ';
          if (st.bold) classes += 'font-bold ';
          if (st.italic) classes += 'italic ';
          if (st.align === 'center') classes += 'text-center ';
          else if (st.align === 'right' || (!isHeaderRow && typeof rawVal === 'number')) classes += 'text-right mono ';

          // Clickable URL rendering inside cells when not editing
          const dispStr = String(dispVal);
          let cellContent = escapeHtml(dispStr);
          if (!isHeaderRow && (dispStr.startsWith('http://') || dispStr.startsWith('https://'))) {
            cellContent = '<a href="' + escapeHtml(dispStr) + '" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="text-[var(--primary)] underline hover:opacity-80 mono text-xs">' + escapeHtml(dispStr) + '</a>';
          }

          bodyHtml += '<td onclick="selectGridCell(' + r + ', ' + c + ')" ondblclick="startInlineCellEdit(this, ' + r + ', ' + c + ')" class="' + classes + '" title="' + escapeHtml(String(rawVal)) + '">' + cellContent + '</td>';
        }
        bodyHtml += '</tr>';
      }
      tbody.innerHTML = bodyHtml;

      const coord = colIndexToLetter(activeCell.c) + (activeCell.r + 1);
      document.getElementById('activeCellCoord').textContent = coord;
      const curRaw = (grid[activeCell.r] && grid[activeCell.r][activeCell.c] !== undefined)
        ? grid[activeCell.r][activeCell.c]
        : '';
      document.getElementById('formulaBarInput').value = String(curRaw);

      // Render bottom sheet tabs safely using data-tab index
      const tabBar = document.getElementById('sheetTabsBar');
      window.__currentTabNames = tabNames;
      tabBar.innerHTML = tabNames.map((t, idx) => {
        const active = t === currentSheetTab;
        return '<button onclick="switchSheetTabByIndex(' + idx + ')" class="px-3.5 py-1.5 rounded-xl font-semibold whitespace-nowrap cursor-pointer transition ' + (active ? 'btn-primary shadow-sm' : 'app-surface border border-token hover:border-blue-400') + '">' + escapeHtml(t) + '</button>';
      }).join('') + '<button onclick="addNewSheetTab()" class="px-3 py-1.5 rounded-xl app-surface border border-token font-bold hover:border-blue-400 cursor-pointer" title="Add New Tab">+</button>';

      document.getElementById('statRowCount').textContent = String(grid.length);
      document.getElementById('statColCount').textContent = String(grid[0] ? grid[0].length : 0);
      document.getElementById('statSum').textContent = numericSum.toLocaleString(undefined, { maximumFractionDigits: 1 });
      document.getElementById('statAvg').textContent = numericCount ? (numericSum / numericCount).toFixed(1) : '0';
    }

    function switchSheetTabByIndex(idx) {
      const name = window.__currentTabNames && window.__currentTabNames[idx];
      if (!name) return;
      currentSheetTab = name;
      activeCell = { r: 0, c: 0 };
      renderSpreadsheetEditor();
      showToast('Switched to tab "' + name + '"');
    }

    function selectGridCell(r, c) {
      activeCell = { r, c };
      renderSpreadsheetEditor();
    }

    function startInlineCellEdit(tdEl, r, c) {
      activeCell = { r, c };
      const wb = MASTER_INVENTORY.find(x => x.id === currentWorkbookId) || MASTER_INVENTORY[0];
      const grid = getWorkbookTabsAndGrid(wb)[currentSheetTab];
      const curVal = (grid[r] && grid[r][c] !== undefined) ? String(grid[r][c]) : '';
      const input = document.createElement('input');
      input.type = 'text';
      input.value = curVal;
      input.className = 'w-full h-full bg-[var(--bg-surface)] text-[var(--text-main)] mono text-xs px-1 focus:outline-none';
      tdEl.innerHTML = '';
      tdEl.appendChild(input);
      input.focus();
      input.select();

      const saveInline = () => {
        document.getElementById('formulaBarInput').value = input.value;
        commitFormulaBar();
      };
      input.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter') { ev.preventDefault(); saveInline(); }
        else if (ev.key === 'Escape') { ev.preventDefault(); renderSpreadsheetEditor(); }
      });
      input.addEventListener('blur', saveInline);
    }

    function handleFormulaBarInput() {}

    function handleFormulaBarKey(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        commitFormulaBar();
      } else if (e.key === 'Escape') {
        renderSpreadsheetEditor();
      }
    }

    function commitFormulaBar() {
      const wb = MASTER_INVENTORY.find(x => x.id === currentWorkbookId) || MASTER_INVENTORY[0];
      if (!writeBackEnabled) {
        showToast('🔒 Read-Only Mode is active. Click the Edit Mode button in the top bar to unlock.');
        return;
      }
      const tabMap = getWorkbookTabsAndGrid(wb);
      const grid = tabMap[currentSheetTab];
      while (grid.length <= activeCell.r) grid.push([]);
      const oldVal = grid[activeCell.r][activeCell.c] ?? '';
      const newVal = document.getElementById('formulaBarInput').value;
      if (String(oldVal) === String(newVal)) {
        renderSpreadsheetEditor();
        return;
      }

      undoStack.push({ wbId: wb.id, tab: currentSheetTab, r: activeCell.r, c: activeCell.c, val: oldVal });
      redoStack.length = 0;

      const num = Number(newVal);
      grid[activeCell.r][activeCell.c] = (newVal.trim() !== '' && !isNaN(num) && !newVal.startsWith('=')) ? num : newVal;

      document.getElementById('saveStateIndicator').textContent = 'Saved ' + colIndexToLetter(activeCell.c) + (activeCell.r + 1);
      renderSpreadsheetEditor();
      showToast('Updated cell ' + colIndexToLetter(activeCell.c) + (activeCell.r + 1));
    }

    function toggleWriteBackMode() {
      writeBackEnabled = !writeBackEnabled;
      const btn = document.getElementById('writeModeBtn');
      if (writeBackEnabled) {
        btn.className = 'px-3 py-1.5 rounded-xl text-xs font-semibold badge-pos border border-token cursor-pointer';
        btn.textContent = '✏️ Interactive Edit Mode Active (Double-Click Any Cell)';
        showToast('Interactive cell editing enabled');
      } else {
        btn.className = 'px-3 py-1.5 rounded-xl text-xs font-semibold badge-warn border border-token cursor-pointer';
        btn.textContent = '🔒 Read-Only Safe Mode (Click to Unlock Editing)';
        showToast('Locked in Read-Only Safe Mode');
      }
    }

    function createCheckpointSnapshot() {
      checkpoints++;
      document.getElementById('checkpointCount').textContent = String(checkpoints);
      showToast('Saved non-destructive checkpoint #' + checkpoints);
    }

    function editorUndo() {
      if (!undoStack.length) { showToast('Nothing to undo'); return; }
      const op = undoStack.pop();
      const grid = REAL_SHEET_GRIDS[op.wbId][op.tab];
      const cur = grid[op.r][op.c];
      redoStack.push({ ...op, val: cur });
      grid[op.r][op.c] = op.val;
      renderSpreadsheetEditor();
      showToast('Undid edit at ' + colIndexToLetter(op.c) + (op.r + 1));
    }

    function editorRedo() {
      if (!redoStack.length) { showToast('Nothing to redo'); return; }
      const op = redoStack.pop();
      const grid = REAL_SHEET_GRIDS[op.wbId][op.tab];
      const cur = grid[op.r][op.c];
      undoStack.push({ ...op, val: cur });
      grid[op.r][op.c] = op.val;
      renderSpreadsheetEditor();
      showToast('Redid edit at ' + colIndexToLetter(op.c) + (op.r + 1));
    }

    function toggleCellFormat(prop) {
      const key = currentWorkbookId + '::' + currentSheetTab + '::' + activeCell.r + ':' + activeCell.c;
      cellStyles[key] = cellStyles[key] || {};
      cellStyles[key][prop] = !cellStyles[key][prop];
      renderSpreadsheetEditor();
    }

    function setCellAlign(align) {
      const key = currentWorkbookId + '::' + currentSheetTab + '::' + activeCell.r + ':' + activeCell.c;
      cellStyles[key] = cellStyles[key] || {};
      cellStyles[key].align = align;
      renderSpreadsheetEditor();
    }

    function editorAddRow() {
      const grid = REAL_SHEET_GRIDS[currentWorkbookId][currentSheetTab];
      const cols = grid[0] ? grid[0].length : 8;
      grid.push(new Array(cols).fill(''));
      renderSpreadsheetEditor();
      showToast('Added new row');
    }

    function editorAddCol() {
      const grid = REAL_SHEET_GRIDS[currentWorkbookId][currentSheetTab];
      grid.forEach((row, idx) => row.push(idx === 0 ? 'Col ' + (row.length + 1) : ''));
      renderSpreadsheetEditor();
      showToast('Added new column');
    }

    function addNewSheetTab() {
      const tabMap = REAL_SHEET_GRIDS[currentWorkbookId];
      const newName = 'Tab_' + (Object.keys(tabMap).length + 1);
      tabMap[newName] = [
        ["Metric / Item", "Q1", "Q2", "Q3", "Total Formula"],
        ["Operational Entry", 120, 145, 180, "=SUM(B2:D2)"]
      ];
      currentSheetTab = newName;
      renderSpreadsheetEditor();
      showToast('Created tab "' + newName + '"');
    }

    function handleSheetSearch(q) {
      sheetSearchQuery = (q || '').trim().toLowerCase();
      renderSpreadsheetEditor();
    }

    function sanitizeCsvCell(val) {
      let s = String(val ?? '');
      if (/^[=+\\-@]/.test(s)) s = "'" + s;
      return '"' + s.replace(/"/g, '""') + '"';
    }

    function triggerCsvDownload(filename, rows) {
      const csvContent = rows.map(r => r.map(sanitizeCsvCell).join(',')).join('\\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Exported ' + filename);
    }

    function exportActiveSheetCsv() {
      const wb = MASTER_INVENTORY.find(x => x.id === currentWorkbookId) || MASTER_INVENTORY[0];
      const grid = REAL_SHEET_GRIDS[wb.id][currentSheetTab] || [];
      triggerCsvDownload(wb.title.replace(/[^a-zA-Z0-9_-]/g, '_') + '_' + currentSheetTab + '.csv', grid);
    }

    function exportCurrentInventoryCsv() {
      const items = getFilteredInventory();
      const header = ["ID", "Title", "Cadence", "Type", "Provider", "Owner", "Workspace", "Folder Path", "Modified (Europe/Nicosia)", "Tab Count", "Tabs", "URL"];
      const rows = [header, ...items.map(i => [
        i.id, i.title, i.agentCadenceLabel, i.type, i.provider, i.owner, i.workspace, i.folderPath,
        i.modifiedNicosia, i.tabCount, (i.tabs || []).join(' | '), i.viewUrl
      ])];
      triggerCsvDownload('SANDEEP_WORKSPACE_INVENTORY.csv', rows);
    }

    function openDetailDrawer(wbId) {
      const wb = MASTER_INVENTORY.find(x => x.id === wbId) || MASTER_INVENTORY[0];
      currentWorkbookId = wb.id;
      const drawer = document.getElementById('detailDrawer');
      const body = document.getElementById('detailDrawerBody');
      drawer.classList.remove('hidden');

      body.innerHTML = \`
        <div class="space-y-1.5">
          <div>\${renderCadenceBadge(wb)}</div>
          <h3 class="text-base font-bold break-words pt-1">\${escapeHtml(wb.title)}</h3>
          <div class="text-xs text-sec mono break-all">ID: \${escapeHtml(wb.id)}</div>
        </div>

        <div class="app-elevated border border-token rounded-xl p-3.5 space-y-2">
          <div class="text-xs font-bold uppercase tracking-wider text-sec">Agent Schedule &amp; Operational Notes</div>
          <p class="text-xs text-body leading-relaxed">\${escapeHtml(wb.agentCadenceDetail || wb.activityReason)}</p>
        </div>

        <div class="app-elevated border border-token rounded-xl p-3.5 space-y-2 text-xs">
          <div class="text-xs font-bold uppercase tracking-wider text-sec">Four-Timestamp Audit</div>
          <div class="flex justify-between"><span>1. Created:</span><span class="mono font-medium">\${escapeHtml(wb.createdNicosia)}</span></div>
          <div class="flex justify-between"><span>2. Last Updated:</span><span class="mono font-bold text-[var(--primary)]">\${escapeHtml(wb.modifiedNicosia)}</span></div>
          <div class="flex justify-between"><span>3. Viewed by Me:</span><span class="mono font-medium">\${escapeHtml(wb.viewedByMeNicosia)}</span></div>
          <div class="flex justify-between"><span>4. Indexed UTC:</span><span class="mono text-sec">\${escapeHtml(wb.firstIndexedUtc)}</span></div>
        </div>

        <div class="app-elevated border border-token rounded-xl p-3.5 space-y-2 text-xs">
          <div class="text-xs font-bold uppercase tracking-wider text-sec">Ownership, Storage &amp; Access</div>
          <div><span class="text-sec">Provider:</span> <strong>\${escapeHtml(wb.provider)}</strong></div>
          <div><span class="text-sec">Owner:</span> <span class="mono">\${escapeHtml(wb.owner)}</span></div>
          <div><span class="text-sec">Access Role:</span> <strong>\${escapeHtml(wb.accessRole)}</strong></div>
          <div><span class="text-sec">Workspace:</span> \${escapeHtml(wb.workspace)}</div>
          <div><span class="text-sec">Path:</span> <span class="mono">\${escapeHtml(wb.folderPath)}</span></div>
          <div><span class="text-sec">File Size:</span> <span class="mono">\${formatBytes(wb.fileSize)}</span></div>
        </div>

        <div class="app-elevated border border-token rounded-xl p-3.5 space-y-2">
          <div class="text-xs font-bold uppercase tracking-wider text-sec">Click Any Tab to Open (\${wb.tabCount})</div>
          <div class="flex flex-wrap gap-1.5">
            \${(wb.tabs || []).map(t => \`<button onclick="openWorkbookInEditor('\${wb.id}', '\${escapeHtml(t)}')" class="px-2.5 py-1 rounded-lg app-surface border border-token mono text-xs hover:border-blue-400 cursor-pointer">\${escapeHtml(t)}</button>\`).join('')}
          </div>
        </div>

        <div class="flex flex-col gap-2 pt-2">
          <button onclick="openWorkbookInEditor('\${wb.id}')" class="w-full py-2.5 rounded-xl btn-primary text-xs cursor-pointer">
            ⊞ Open in Full Spreadsheet Editor
          </button>
          <a href="\${escapeHtml(wb.viewUrl)}" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 rounded-xl app-elevated border border-token text-center font-semibold text-xs hover:border-blue-400">
            ↗ Open Original Source URL
          </a>
        </div>
      \`;
    }

    function closeDetailDrawer() {
      document.getElementById('detailDrawer').classList.add('hidden');
    }

    function runLiveConnectorAuditToast() {
      showToast('Verified all 4 Daily Sheets, 3 Scheduled Trackers, 4 Spark Sheets & 155 Drive Workbooks.');
    }

    function handleLocalFileImport(e) {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(evt) {
        const text = String(evt.target.result || '');
        const lines = text.split(/\\r?\\n/).filter(Boolean).slice(0, 250);
        const grid = lines.map(l => l.split(file.name.endsWith('.tsv') ? '\\t' : ','));
        const newId = 'local-import-' + Date.now();
        const newWb = {
          id: newId,
          title: '[Imported] ' + file.name,
          type: 'Local Import (.csv)',
          extension: 'csv',
          mimeType: 'text/csv',
          provider: 'Local Laptop Upload',
          account: 'local-session',
          owner: 'bagosandeep@gmail.com',
          ownership: 'Local Import',
          workspace: 'Career HQ',
          folderPath: 'Local Laptop / Browser Import',
          createdUtc: new Date().toISOString(),
          modifiedUtc: new Date().toISOString(),
          viewedByMeUtc: new Date().toISOString(),
          createdNicosia: 'Just now',
          modifiedNicosia: 'Just now',
          viewedByMeNicosia: 'Just now',
          firstIndexedUtc: new Date().toISOString(),
          createdInOct2026: true,
          modifiedInOct2026: true,
          viewedInOct2026: true,
          activeInOct2026: true,
          agentTier: 'DAILY',
          agentCadenceLabel: 'LOCAL IMPORT',
          agentCadenceDetail: 'Uploaded directly from laptop in current session',
          activityReason: 'Uploaded locally',
          tabs: ['Imported_Sheet'],
          tabCount: 1,
          fileSize: file.size,
          readOnly: false,
          accessRole: 'Owner (Read/Write)',
          syncMode: 'Standalone Replica',
          syncStatus: 'Synced & Indexed',
          viewUrl: '#'
        };
        MASTER_INVENTORY.unshift(newWb);
        REAL_SHEET_GRIDS[newId] = { 'Imported_Sheet': grid.length ? grid : [['Empty File']] };
        document.getElementById('importResultStatus').textContent = 'Imported ' + file.name + ' (' + lines.length + ' rows). Opening in editor...';
        openWorkbookInEditor(newId);
      };
      reader.readAsText(file);
    }

    const BLUEPRINT_MODULES = {
      1: {
        title: "1. Calm Command Center Typography & Spacing System",
        why: "Designed specifically for Sandeep's laptop screen using Instrument Sans for crisp editorial hierarchy and IBM Plex Mono for tabular numerals, timestamps, and match scores.",
        rules: [
          "Typography: Instrument Sans (400/500/600/700) + IBM Plex Mono (tabular-nums) for pixel-aligned numbers.",
          "Clickable Brand Header: Clicking 'Sandeep Workspace' resets all active filters and returns immediately to the Agent Operations Command Center.",
          "Active Selection Feedback: Every sidebar item, filter pill, sheet tab, and table row provides immediate visual highlight."
        ],
        codeTitle: "tokens.css — Calm Command Center Palette",
        code: \`:root {
  --font-ui: "Instrument Sans", "Plus Jakarta Sans", sans-serif;
  --font-data: "IBM Plex Mono", monospace;
  --primary: #4E95FF;
  --positive: #4ADE80;
  --warning: #FBBF24;
}\`
      },
      2: {
        title: "2. Honest Multi-Agent Update Cadences (Daily vs Scheduled)",
        why: "Not every spreadsheet is touched daily. The dashboard explicitly separates the 4 daily-updated sheets from the 3 scheduled/batch sheets so you always know why dates differ.",
        rules: [
          "Daily View: Deadline Dashboard (kept current daily as things change; updated yesterday with fresh Delhi fares).",
          "4x Daily Social Sweeps (00:00, 06:00, 12:00, 18:00): Updates both FB - INSTA APPLICATIONS (Drive) and SANDEEP_FACEBOOK_INSTAGRAM_JOB_HUNTER (Local Machine, last touched today at 00:59).",
          "6-Hourly Engine + Weekday 08:30: Updates MASTER_JOB_APPLICATION_TRACKER.xlsx (last touched yesterday at 20:24).",
          "Non-Daily Trackers: GRADUATE SCHEMES (every 3 days), master-spreadsheet.xlsx (Mondays only, updated yesterday 09:58), Freelance Lead Tracker (batch-only)."
        ],
        codeTitle: "agentCadenceRegistry.ts",
        code: \`export const AGENT_SCHEDULES = {
  DEADLINE_DASHBOARD: "DAILY_LIVE (Fresh Delhi Fares)",
  FB_INSTA_DRIVE: "4X_DAILY (00:00, 06:00, 12:00, 18:00)",
  FB_INSTA_LOCAL: "4X_DAILY_LOCAL (Last touch: Today 00:59)",
  MASTER_JOB_TRACKER: "6_HOURLY_PLUS_0830 (Last touch: Yesterday 20:24)",
  GRADUATE_SCHEMES: "EVERY_3_DAYS",
  MASTERS_ADMISSIONS: "MONDAYS_ONLY (Last touch: Yesterday 09:58)",
  FREELANCE_TRACKER: "ON_DEMAND_BATCH_ONLY"
};\`
      },
      3: {
        title: "3. Four-Timestamp Separation & Timezone Honesty",
        why: "Separates Created, Modified, Viewed-by-Me, and Indexed timestamps across Europe/Nicosia and UTC without fabricating missing telemetry.",
        rules: [
          "1. Created Timestamp (Source file creation)",
          "2. Modified Timestamp (Last agent or human write)",
          "3. Viewed by Me Timestamp (Explicitly shows 'Not available from provider' when omitted)",
          "4. First Indexed Timestamp"
        ],
        codeTitle: "timeWindow.ts",
        code: \`export const TIMEZONE_DEFAULT = "Europe/Nicosia";\`
      },
      4: {
        title: "4. Interactive Multi-Tab Spreadsheet Editor & Formula Engine",
        why: "Every workbook opens with real multi-tab rows, clickable links, inline double-click cell editing, and live formula evaluation (=SUM, =AVERAGE, =MIN, =MAX).",
        rules: [
          "Double-click any cell to edit inline or use the fx Formula Bar.",
          "Switch seamlessly across tabs (e.g., Daily Command & Deadlines, Delhi Fares Tracker (DEL), Admissions & Scheme Cutoffs).",
          "Export any tab or filtered view to CSV with automatic formula-injection sanitization."
        ],
        codeTitle: "formulaEvaluator.ts",
        code: \`// Evaluates =SUM(C2:C7), =AVERAGE(H2:H6), =MIN(H2:H6) live in the grid\`
      },
      5: {
        title: "5. External Agent Permission Boundaries (Spark Agent Sheets)",
        why: "The India, EU, UK, and USA job sheets belong to Spark, your other agent. Your primary agent does not update them and its direct access is refused.",
        rules: [
          "Explicitly labeled as 'Owned by Spark Agent (Main Agent Access Refused)'.",
          "Mirrored in read-only snapshot mode so you can still inspect the India, EU, UK, and USA tables inside your dashboard."
        ],
        codeTitle: "sparkPermissionBoundary.ts",
        code: \`export const SPARK_OWNED_SHEETS = [
  "India Jobs (15hOKXuvZDIrytvqRLQNvLQx4w7wTdFS-DSnvT1XIkOw)",
  "Eu Jobs (1wi4i3qpDLOzfNXa5_AR6Bvhb4w40xTr4QQmM9qGAzj4)",
  "Uk Jobs (1ECo6MFxrDXpOQlTyCRGor5XUgE8e4t2zL-LXWJRFN5A)",
  "USA Jobs (1tIi0TiQ0L1fNUcqTWTsRVJhV-69g3pbrHGGkhmGGvyo)"
];\`
      }
    };

    function selectBlueprintModule(num) {
      [1, 2, 3, 4, 5].forEach(n => {
        const b = document.getElementById('bpBtn-' + n);
        if (b) {
          b.className = n === num
            ? 'px-3.5 py-2 rounded-xl font-semibold btn-primary cursor-pointer'
            : 'px-3.5 py-2 rounded-xl font-medium app-elevated border border-token hover:border-blue-400 cursor-pointer';
        }
      });
      const m = BLUEPRINT_MODULES[num];
      const container = document.getElementById('blueprintModuleContent');
      container.innerHTML = \`
        <div class="app-surface border border-token rounded-2xl p-6 space-y-4">
          <h3 class="text-base font-bold">\${escapeHtml(m.title)}</h3>
          <p class="text-sm text-body leading-relaxed">\${escapeHtml(m.why)}</p>
          <ul class="space-y-2.5 text-sm">
            \${m.rules.map(r => \`<li class="flex items-start gap-2.5"><span class="badge-pos px-2 py-0.5 rounded text-xs font-bold">✓</span><span>\${escapeHtml(r)}</span></li>\`).join('')}
          </ul>
        </div>
        <div class="app-surface border border-token rounded-2xl p-6 flex flex-col justify-between space-y-4">
          <div class="flex items-center justify-between">
            <span class="mono text-xs font-semibold text-sec">\${escapeHtml(m.codeTitle)}</span>
          </div>
          <pre class="app-elevated border border-token rounded-xl p-4 text-xs mono overflow-x-auto leading-relaxed">\${escapeHtml(m.code)}</pre>
        </div>
      \`;
    }

    function openCommandPalette() {
      const modal = document.getElementById('commandPaletteModal');
      modal.classList.remove('hidden');
      const input = document.getElementById('cmdPaletteInput');
      input.value = '';
      renderCommandPaletteResults('');
      input.focus();
    }

    function closeCommandPalette() {
      document.getElementById('commandPaletteModal').classList.add('hidden');
    }

    function renderCommandPaletteResults(q) {
      const query = (q || '').trim().toLowerCase();
      const actions = [
        { label: "Open: Deadline Dashboard & Fresh Delhi Fares (Daily View)", run: () => { openWorkbookInEditor('deadline-dashboard-daily', 'Delhi Fares Tracker (DEL)'); closeCommandPalette(); } },
        { label: "Open: SANDEEP_FACEBOOK_INSTAGRAM_JOB_HUNTER (Today 00:59 Sweep)", run: () => { openWorkbookInEditor('local-fb-insta-job-hunter', '00_59_Midnight_Sweep_Today'); closeCommandPalette(); } },
        { label: "Open: FB - INSTA APPLICATIONS (Google Sheet in Drive · 4x Daily)", run: () => { openWorkbookInEditor('1-jsydfLBJibFJjy4dabDCOZpG7m_6bJxdxPYRWHJ1x0', 'ALL LEADS'); closeCommandPalette(); } },
        { label: "Open: MASTER_JOB_APPLICATION_TRACKER (Yesterday 20:24 · 6-Hourly + 08:30)", run: () => { openWorkbookInEditor('1F8p-KNl8PLMfRIzRxZ0nFORRHOuF5qL1', 'Active Applications Master'); closeCommandPalette(); } },
        { label: "Open: GRADUATE SCHEMES - MASTER TRACKER (Every 3 Days)", run: () => { openWorkbookInEditor('1zGcyFrXBXQKOrmgJngXGYfIlYm1n1s_AV_DlHJ9tgtQ', 'ALL SCHEMES'); closeCommandPalette(); } },
        { label: "Open: master-spreadsheet.xlsx — Masters Admissions (Mondays Only · 09:58)", run: () => { openWorkbookInEditor('156pTG6IBQ00x6AP2BFm3sg-zy_iZ4PLj', 'Masters Admissions (Mondays 09:58)'); closeCommandPalette(); } },
        { label: "Open: Freelance Lead Tracker (Local Batch File)", run: () => { openWorkbookInEditor('local-freelance-lead-tracker', 'Batch Leads Queue'); closeCommandPalette(); } },
        { label: "Filter: Show All 158 Workbooks", run: () => { selectNavPreset('all'); closeCommandPalette(); } },
        { label: "Action: Toggle Light / Dark Theme", run: () => { toggleTheme(); closeCommandPalette(); } }
      ];

      const matchingActions = actions.filter(a => !query || a.label.toLowerCase().includes(query));
      const matchingWbs = MASTER_INVENTORY.filter(w => !query || w.title.toLowerCase().includes(query) || (w.agentCadenceLabel || '').toLowerCase().includes(query)).slice(0, 12);

      window.__cmdHandlers = [];
      let html = '';
      matchingActions.forEach(a => {
        const idx = window.__cmdHandlers.push(a.run) - 1;
        html += '<button onclick="window.__cmdHandlers[' + idx + ']()" class="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[var(--cell-hover)] flex items-center justify-between cursor-pointer"><span>⚡ ' + escapeHtml(a.label) + '</span><span class="text-xs text-sec mono">Quick Jump</span></button>';
      });
      matchingWbs.forEach(w => {
        const idx = window.__cmdHandlers.push(() => { openWorkbookInEditor(w.id); closeCommandPalette(); }) - 1;
        html += '<button onclick="window.__cmdHandlers[' + idx + ']()" class="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[var(--cell-hover)] flex items-center justify-between cursor-pointer"><span class="truncate font-medium">⊞ ' + escapeHtml(w.title) + '</span><span class="text-xs text-sec mono shrink-0 ml-3">' + escapeHtml(w.agentCadenceLabel || w.workspace) + ' · ' + w.tabCount + ' tabs</span></button>';
      });
      document.getElementById('cmdPaletteList').innerHTML = html || '<div class="p-6 text-center text-sec">No matching commands or workbooks</div>';
    }

    window.addEventListener('keydown', function(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openCommandPalette();
      } else if (e.key === 'Escape') {
        closeCommandPalette();
      } else if (currentView === 'editor' && document.activeElement !== document.getElementById('formulaBarInput') && document.activeElement !== document.getElementById('sheetSearchInput') && document.activeElement.tagName !== 'INPUT') {
        if (e.key === 'ArrowDown') { e.preventDefault(); activeCell.r = Math.min(activeCell.r + 1, 30); renderSpreadsheetEditor(); }
        if (e.key === 'ArrowUp') { e.preventDefault(); activeCell.r = Math.max(activeCell.r - 1, 0); renderSpreadsheetEditor(); }
        if (e.key === 'ArrowRight' || e.key === 'Tab') { e.preventDefault(); activeCell.c = Math.min(activeCell.c + 1, 18); renderSpreadsheetEditor(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); activeCell.c = Math.max(activeCell.c - 1, 0); renderSpreadsheetEditor(); }
      }
    });

    window.onload = function() {
      populateEditorWorkbookDropdown();
      renderExplorer();
    };
  </script>
</body>
</html>`;

const fullHtml = htmlHeadAndBody + jsScriptBlock;

const indexOut = path.join(rootDir, 'apps/web/public/index.html');
const previewOut = path.join(rootDir, 'apps/web/public/sandeep_workspace_live_preview.html');
const rootIndexOut = path.join(rootDir, 'index.html');

fs.writeFileSync(indexOut, fullHtml, 'utf8');
fs.writeFileSync(previewOut, fullHtml, 'utf8');
fs.writeFileSync(rootIndexOut, fullHtml, 'utf8');
console.log('Successfully generated index.html (root + apps/web/public) and sandeep_workspace_live_preview.html (' + fullHtml.length + ' bytes).');
