import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const htmlHeadAndBody = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sandeep Workspace — Calm Command Center &amp; Live Agent Operations OS</title>
  <script src="https://cdn.tailwindcss.com/3.4.17"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    :root[data-theme="light"] {
      --bg-app: #F4F6F8;
      --bg-surface: #FFFFFF;
      --bg-elevated: #EEF2F5;
      --bg-hover: #E6ECF2;
      --text-main: #14202B;
      --text-body: #334352;
      --text-sec: #647485;
      --primary: #155EEF;
      --primary-hover: #004EEB;
      --primary-soft: #EAF1FF;
      --positive: #15803D;
      --positive-soft: #EAF7EE;
      --warning: #B54708;
      --warning-soft: #FFF4E5;
      --error: #B42318;
      --error-soft: #FDECEC;
      --purple: #6D28D9;
      --purple-soft: #F3E8FF;
      --border-col: #DCE3E8;
      --border-strong: #C6D0D8;
      --cell-hover: #F1F5F9;
      --cell-sel: rgba(21, 94, 239, 0.10);
      --shadow-card: 0 1px 3px rgba(20, 32, 43, 0.06), 0 1px 2px rgba(20, 32, 43, 0.04);
      --shadow-float: 0 14px 34px rgba(20, 32, 43, 0.14);
    }
    :root[data-theme="dark"] {
      --bg-app: #0B1017;
      --bg-surface: #121923;
      --bg-elevated: #182230;
      --bg-hover: #1E2B3C;
      --text-main: #F3F6F8;
      --text-body: #CBD5E1;
      --text-sec: #8796A3;
      --primary: #4E95FF;
      --primary-hover: #6EA8FE;
      --primary-soft: rgba(78, 149, 255, 0.15);
      --positive: #4ADE80;
      --positive-soft: rgba(74, 222, 128, 0.14);
      --warning: #FBBF24;
      --warning-soft: rgba(251, 191, 36, 0.15);
      --error: #F87171;
      --error-soft: rgba(248, 113, 113, 0.15);
      --purple: #C084FC;
      --purple-soft: rgba(192, 132, 252, 0.15);
      --border-col: #223042;
      --border-strong: #314359;
      --cell-hover: #192434;
      --cell-sel: rgba(78, 149, 255, 0.16);
      --shadow-card: 0 2px 6px rgba(0, 0, 0, 0.28);
      --shadow-float: 0 18px 40px rgba(0, 0, 0, 0.55);
    }

    * { box-sizing: border-box; }
    html, body {
      height: 100%;
      margin: 0;
      font-family: 'Instrument Sans', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: var(--bg-app);
      color: var(--text-main);
      font-size: 14px;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      overflow: hidden;
    }
    .tabular-nums { font-variant-numeric: tabular-nums; }
    .mono { font-family: 'IBM Plex Mono', monospace; font-variant-numeric: tabular-nums; }
    .app-surface { background-color: var(--bg-surface); border-color: var(--border-col); box-shadow: var(--shadow-card); }
    .app-elevated { background-color: var(--bg-elevated); border-color: var(--border-col); }
    .text-sec { color: var(--text-sec); }
    .text-body { color: var(--text-body); }
    .border-token { border-color: var(--border-col); }
    .border-strong { border-color: var(--border-strong); }

    .btn-primary {
      background-color: var(--primary);
      color: #FFFFFF;
      font-weight: 600;
      transition: all 140ms ease;
    }
    .btn-primary:hover {
      background-color: var(--primary-hover);
      transform: translateY(-0.5px);
    }
    :root[data-theme="dark"] .btn-primary {
      color: #08101D;
    }

    .badge-pos { background: var(--positive-soft); color: var(--positive); border: 1px solid rgba(74, 222, 128, 0.25); }
    .badge-warn { background: var(--warning-soft); color: var(--warning); border: 1px solid rgba(251, 191, 36, 0.25); }
    .badge-err { background: var(--error-soft); color: var(--error); border: 1px solid rgba(248, 113, 113, 0.25); }
    .badge-pri { background: var(--primary-soft); color: var(--primary); border: 1px solid rgba(78, 149, 255, 0.25); }
    .badge-purp { background: var(--purple-soft); color: var(--purple); border: 1px solid rgba(192, 132, 252, 0.25); }

    /* Sidebar Navigation Active State */
    .nav-btn, .ws-btn {
      transition: all 130ms ease;
      border: 1px solid transparent;
      color: var(--text-body);
    }
    .nav-btn:hover, .ws-btn:hover {
      background-color: var(--bg-elevated);
      color: var(--text-main);
    }
    .nav-btn.active-nav, .ws-btn.active-nav {
      background-color: var(--primary-soft);
      color: var(--primary);
      border-color: rgba(78, 149, 255, 0.35);
      font-weight: 600;
    }

    /* Laptop-Optimized Table & Grid Density Modes */
    body[data-density="compact"] .explorer-row td,
    body[data-density="compact"] .explorer-row th { padding: 8px 12px; font-size: 12.5px; }
    body[data-density="standard"] .explorer-row td,
    body[data-density="standard"] .explorer-row th { padding: 12px 16px; font-size: 13.5px; }
    body[data-density="comfortable"] .explorer-row td,
    body[data-density="comfortable"] .explorer-row th { padding: 16px 20px; font-size: 14px; }

    body[data-density="compact"] .grid-cell { height: 30px; padding: 4px 10px; font-size: 12.5px; }
    body[data-density="standard"] .grid-cell { height: 38px; padding: 7px 12px; font-size: 13.5px; }
    body[data-density="comfortable"] .grid-cell { height: 46px; padding: 10px 16px; font-size: 14px; }

    .grid-table { border-collapse: separate; border-spacing: 0; }
    .grid-cell {
      border-right: 1px solid var(--border-col);
      border-bottom: 1px solid var(--border-col);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 340px;
      min-width: 115px;
      cursor: cell;
      user-select: none;
      transition: background-color 80ms ease;
    }
    .grid-cell:hover { background-color: var(--cell-hover); }
    .grid-cell.active-cell {
      outline: 2px solid var(--primary);
      outline-offset: -2px;
      background-color: var(--cell-sel);
      z-index: 5;
      position: relative;
    }
    .grid-header-cell {
      background-color: var(--bg-elevated);
      color: var(--text-sec);
      font-weight: 600;
      font-size: 12px;
      border-right: 1px solid var(--border-col);
      border-bottom: 1px solid var(--border-strong);
      text-align: center;
      position: sticky;
      top: 0;
      z-index: 10;
      height: 32px;
      padding: 4px 10px;
    }
    .grid-row-num {
      background-color: var(--bg-elevated);
      color: var(--text-sec);
      font-weight: 600;
      font-size: 12px;
      border-right: 1px solid var(--border-strong);
      border-bottom: 1px solid var(--border-col);
      text-align: center;
      position: sticky;
      left: 0;
      z-index: 9;
      min-width: 48px;
      width: 48px;
    }
    .agent-card {
      transition: transform 140ms ease, border-color 140ms ease, box-shadow 140ms ease;
    }
    .agent-card:hover {
      transform: translateY(-1px);
      border-color: var(--primary);
      box-shadow: var(--shadow-float);
    }
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 4px; }
  </style>
</head>
<body data-density="standard" class="h-screen flex flex-col overflow-hidden">

  <!-- TOP LAPTOP COMMAND HEADER -->
  <header class="app-surface border-b border-token h-16 px-6 flex items-center justify-between gap-4 shrink-0 z-30">
    <!-- Clickable Brand Logo ("Sandeep Workspace") -->
    <div class="flex items-center gap-3 min-w-0">
      <button
        id="brandLogoBtn"
        onclick="handleLogoClick()"
        class="group flex items-center gap-3 text-left px-2.5 py-1.5 -ml-2.5 rounded-xl hover:bg-[var(--bg-elevated)] transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        title="Click to return to Sandeep Workspace Home &amp; Reset All Filters"
      >
        <div class="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm btn-primary shadow-sm shrink-0">
          SW
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="font-bold text-base tracking-tight group-hover:text-[var(--primary)] transition">Sandeep Workspace</span>
            <span class="badge-pri text-[11px] font-semibold px-2 py-0.5 rounded-md mono">OS v3.0</span>
          </div>
          <div class="text-[11.5px] text-sec flex items-center gap-2">
            <span class="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Calm Command Center · Laptop Cockpit</span>
          </div>
        </div>
      </button>

      <div class="hidden xl:flex items-center gap-2 pl-3 border-l border-token">
        <span class="badge-pos text-xs font-medium px-2.5 py-1 rounded-lg mono">● 4 Daily Sheets Live</span>
        <span class="badge-pri text-xs font-medium px-2.5 py-1 rounded-lg mono">3 Scheduled Trackers</span>
        <span class="badge-warn text-xs font-medium px-2.5 py-1 rounded-lg mono">4 Spark Agent Sheets</span>
      </div>
    </div>

    <!-- Global Search & Command Palette Trigger -->
    <div class="flex-1 max-w-xl mx-4">
      <div class="relative flex items-center">
        <input
          id="globalSearchInput"
          type="text"
          oninput="handleGlobalSearch(this.value)"
          placeholder="Search agent sheets, Delhi fares, 155 workbooks, tabs, or press ⌘K..."
          class="w-full app-elevated border border-token rounded-xl pl-10 pr-20 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <span class="absolute left-3.5 text-sm text-sec">⌕</span>
        <div class="absolute right-2 flex items-center gap-1">
          <button id="clearSearchBtn" onclick="handleGlobalSearch(''); document.getElementById('globalSearchInput').value='';" class="hidden px-1.5 py-0.5 text-xs rounded hover:bg-[var(--bg-hover)] text-sec" title="Clear search">✕</button>
          <button onclick="openCommandPalette()" class="px-2 py-0.5 text-xs mono rounded-md border border-token app-surface text-sec hover:text-[var(--text-main)]">
            ⌘K
          </button>
        </div>
      </div>
    </div>

    <!-- Right Controls: Quick Deadline View, Timezone, Density & Theme -->
    <div class="flex items-center gap-2.5 shrink-0">
      <button
        onclick="openWorkbookInEditor('deadline-dashboard-daily', 'Delhi Fares Tracker (DEL)')"
        class="px-3 py-1.5 rounded-xl text-xs font-semibold badge-pos hover:opacity-90 flex items-center gap-1.5 cursor-pointer"
        title="Open Live Daily Deadline Dashboard &amp; Fresh Delhi Fares"
      >
        <span>✈️</span>
        <span>Delhi Fares &amp; Deadlines</span>
      </button>

      <button
        onclick="toggleTimezoneDisplay()"
        id="tzToggleBtn"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs mono app-elevated border border-token hover:border-blue-400 transition"
        title="Switch displayed timestamp timezone between Europe/Nicosia and UTC"
      >
        <span>🌐</span>
        <span id="tzLabel">Europe/Nicosia</span>
      </button>

      <select
        id="densitySelect"
        onchange="setDensityMode(this.value)"
        aria-label="Row density mode"
        class="app-elevated border border-token rounded-xl px-3 py-1.5 text-xs font-medium focus:outline-none cursor-pointer"
      >
        <option value="compact">Compact Rows</option>
        <option value="standard" selected>Standard Laptop</option>
        <option value="comfortable">Spacious Rows</option>
      </select>

      <button
        onclick="toggleTheme()"
        id="themeBtn"
        class="px-3 py-1.5 rounded-xl text-xs font-medium app-elevated border border-token hover:border-blue-400 transition"
        title="Switch Light / Dark Workspace Theme"
      >
        ☀️ / 🌙
      </button>
    </div>
  </header>

  <!-- MAIN LAPTOP WORKSPACE BODY -->
  <div class="flex-1 flex min-h-0 overflow-hidden">

    <!-- PERSISTENT LEFT NAVIGATION SIDEBAR (268px Laptop Optimized) -->
    <aside id="leftSidebar" class="w-68 min-w-[268px] app-surface border-r border-token flex flex-col justify-between shrink-0 select-none overflow-y-auto">
      <div class="p-4 space-y-6">

        <!-- Group 1: Live Agent Command Views -->
        <div>
          <div class="px-2.5 pb-2 text-[11px] font-bold uppercase tracking-wider text-sec">Live Agent Command</div>
          <nav class="space-y-1 text-[13.5px]">
            <button onclick="selectNavPreset('home')" data-nav="home" class="nav-btn active-nav w-full flex items-center justify-between px-3 py-2 rounded-xl text-left">
              <span class="flex items-center gap-2.5"><span>⚡</span><span>Agent Operations Hub</span></span>
              <span class="badge-pos mono text-[11px] px-1.5 py-0.5 rounded">LIVE</span>
            </button>
            <button onclick="openWorkbookInEditor('deadline-dashboard-daily', 'Daily Command & Deadlines')" data-nav="deadline" class="nav-btn w-full flex items-center justify-between px-3 py-2 rounded-xl text-left">
              <span class="flex items-center gap-2.5"><span>🎯</span><span>Deadline Dashboard</span></span>
              <span class="badge-pri mono text-[11px] px-1.5 py-0.5 rounded">Daily</span>
            </button>
            <button onclick="openWorkbookInEditor('1-jsydfLBJibFJjy4dabDCOZpG7m_6bJxdxPYRWHJ1x0', 'ALL LEADS')" data-nav="fb-insta-drive" class="nav-btn w-full flex items-center justify-between px-3 py-2 rounded-xl text-left">
              <span class="flex items-center gap-2.5 truncate"><span>📲</span><span class="truncate">FB - INSTA (Drive)</span></span>
              <span class="mono text-[11px] text-sec">4x/d</span>
            </button>
            <button onclick="openWorkbookInEditor('local-fb-insta-job-hunter', '00_59_Midnight_Sweep_Today')" data-nav="fb-insta-local" class="nav-btn w-full flex items-center justify-between px-3 py-2 rounded-xl text-left">
              <span class="flex items-center gap-2.5 truncate"><span>💻</span><span class="truncate">FB/IG Hunter (Local)</span></span>
              <span class="badge-pos mono text-[10.5px] px-1.5 rounded">00:59</span>
            </button>
            <button onclick="openWorkbookInEditor('1F8p-KNl8PLMfRIzRxZ0nFORRHOuF5qL1', 'Active Applications Master')" data-nav="master-job" class="nav-btn w-full flex items-center justify-between px-3 py-2 rounded-xl text-left">
              <span class="flex items-center gap-2.5 truncate"><span>🚀</span><span class="truncate">Master Job Tracker</span></span>
              <span class="mono text-[11px] text-sec">20:24</span>
            </button>
            <button onclick="openWorkbookInEditor(currentWorkbookId)" data-nav="editor" class="nav-btn w-full flex items-center justify-between px-3 py-2 rounded-xl text-left">
              <span class="flex items-center gap-2.5"><span>⊞</span><span>Full Spreadsheet Grid</span></span>
              <span class="badge-pri text-[11px] px-1.5 rounded">Editor</span>
            </button>
          </nav>
        </div>

        <!-- Group 2: Scheduled & Spark Agent Sheets -->
        <div>
          <div class="px-2.5 pb-2 text-[11px] font-bold uppercase tracking-wider text-sec">Scheduled &amp; Spark Sheets</div>
          <nav class="space-y-1 text-[13px]">
            <button onclick="openWorkbookInEditor('1zGcyFrXBXQKOrmgJngXGYfIlYm1n1s_AV_DlHJ9tgtQ', 'ALL SCHEMES')" data-nav="grad-schemes" class="nav-btn w-full flex items-center justify-between px-3 py-2 rounded-xl text-left">
              <span class="truncate">🎓 Graduate Schemes</span>
              <span class="mono text-[11px] text-sec">3-Day</span>
            </button>
            <button onclick="openWorkbookInEditor('156pTG6IBQ00x6AP2BFm3sg-zy_iZ4PLj', 'Masters Admissions (Mondays 09:58)')" data-nav="masters-xlsx" class="nav-btn w-full flex items-center justify-between px-3 py-2 rounded-xl text-left">
              <span class="truncate">🏛️ Masters Admissions</span>
              <span class="mono text-[11px] text-sec">Mon</span>
            </button>
            <button onclick="openWorkbookInEditor('local-freelance-lead-tracker', 'Batch Leads Queue')" data-nav="freelance-local" class="nav-btn w-full flex items-center justify-between px-3 py-2 rounded-xl text-left">
              <span class="truncate">💼 Freelance Tracker</span>
              <span class="mono text-[11px] text-sec">Batch</span>
            </button>
            <button onclick="selectNavPreset('spark_sheets')" data-nav="spark_sheets" class="nav-btn w-full flex items-center justify-between px-3 py-2 rounded-xl text-left">
              <span class="truncate">🔒 Spark Regional (4)</span>
              <span class="badge-warn mono text-[10.5px] px-1.5 rounded">Spark</span>
            </button>
          </nav>
        </div>

        <!-- Group 3: Full Repository Views -->
        <div>
          <div class="px-2.5 pb-2 text-[11px] font-bold uppercase tracking-wider text-sec">Repository Library (158)</div>
          <nav class="space-y-1 text-[13px]">
            <button onclick="selectNavPreset('october')" data-nav="october" class="nav-btn w-full flex items-center justify-between px-3 py-2 rounded-xl text-left">
              <span>📅 October 2026 Active</span>
              <span class="mono text-xs text-sec">76</span>
            </button>
            <button onclick="selectNavPreset('all')" data-nav="all" class="nav-btn w-full flex items-center justify-between px-3 py-2 rounded-xl text-left">
              <span>🗂️ All Indexed Sheets</span>
              <span class="mono text-xs text-sec">158</span>
            </button>
            <button onclick="selectNavPreset('starred')" data-nav="starred" class="nav-btn w-full flex items-center justify-between px-3 py-2 rounded-xl text-left">
              <span>⭐ Starred / Pinned</span>
              <span id="starredCountBadge" class="mono text-xs text-sec">9</span>
            </button>
            <button onclick="selectNavPreset('shared')" data-nav="shared" class="nav-btn w-full flex items-center justify-between px-3 py-2 rounded-xl text-left">
              <span>👥 Shared with Me</span>
              <span class="mono text-xs text-sec">10</span>
            </button>
            <button onclick="selectNavPreset('attention')" data-nav="attention" class="nav-btn w-full flex items-center justify-between px-3 py-2 rounded-xl text-left">
              <span>⚠️ Sync / Access Alerts</span>
              <span class="badge-warn mono text-xs px-1.5 rounded">12</span>
            </button>
          </nav>
        </div>

        <!-- Group 4: Business Workspaces -->
        <div>
          <div class="px-2.5 pb-2 text-[11px] font-bold uppercase tracking-wider text-sec">Business Workspaces</div>
          <nav class="space-y-1 text-[13px]">
            <button onclick="selectWorkspaceFilter('Career HQ')" data-ws="Career HQ" class="ws-btn w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-left">
              <span class="truncate">💼 Career HQ &amp; JOBER</span>
              <span class="mono text-xs text-sec">58</span>
            </button>
            <button onclick="selectWorkspaceFilter('Orama Design & Build')" data-ws="Orama Design & Build" class="ws-btn w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-left">
              <span class="truncate">🏗️ Orama Design &amp; Build</span>
              <span class="mono text-xs text-sec">13</span>
            </button>
            <button onclick="selectWorkspaceFilter('BusinessLending.uk')" data-ws="BusinessLending.uk" class="ws-btn w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-left">
              <span class="truncate">💷 BusinessLending.uk</span>
              <span class="mono text-xs text-sec">7</span>
            </button>
            <button onclick="selectWorkspaceFilter('KattuAI & Shared')" data-ws="KattuAI & Shared" class="ws-btn w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-left">
              <span class="truncate">🤖 Spark / KattuAI Shared</span>
              <span class="mono text-xs text-sec">7</span>
            </button>
            <button onclick="selectWorkspaceFilter('Leads & B2B Engines')" data-ws="Leads & B2B Engines" class="ws-btn w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-left">
              <span class="truncate">🎯 Leads &amp; Freelance</span>
              <span class="mono text-xs text-sec">20</span>
            </button>
            <button onclick="selectWorkspaceFilter('SEO, Ops & Archive')" data-ws="SEO, Ops & Archive" class="ws-btn w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-left">
              <span class="truncate">📊 Admissions &amp; Ops</span>
              <span class="mono text-xs text-sec">53</span>
            </button>
          </nav>
        </div>

        <!-- Group 5: System Diagnostics -->
        <div>
          <div class="px-2.5 pb-2 text-[11px] font-bold uppercase tracking-wider text-sec">System &amp; Architecture</div>
          <nav class="space-y-1 text-[13px]">
            <button onclick="switchMainView('connectors')" data-nav="connectors" class="nav-btn w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-left">
              <span>🔌 Agent &amp; Drive Access</span>
              <span class="mono text-xs text-sec">Live</span>
            </button>
            <button onclick="switchMainView('matrix')" data-nav="matrix" class="nav-btn w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-left">
              <span>🛡️ Data Fidelity Matrix</span>
              <span class="mono text-xs text-sec">v3.0</span>
            </button>
            <button onclick="switchMainView('blueprint')" data-nav="blueprint" class="nav-btn w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-left">
              <span>📐 System Architecture</span>
              <span class="mono text-xs text-sec">Spec</span>
            </button>
            <button onclick="switchMainView('imports')" data-nav="imports" class="nav-btn w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-left">
              <span>📥 Local CSV / XLSX</span>
              <span class="mono text-xs text-sec">Import</span>
            </button>
          </nav>
        </div>

      </div>

      <!-- Bottom Telemetry Footer -->
      <div class="p-4 border-t border-token text-xs space-y-2 app-elevated">
        <div class="flex items-center justify-between">
          <span class="font-semibold">Agent Sync Telemetry</span>
          <span class="badge-pos px-2 py-0.5 rounded text-[11px] font-semibold">VERIFIED</span>
        </div>
        <div class="text-sec text-[11px] mono leading-relaxed">
          Last Sweep: Today 00:59 (Local)<br/>
          Job Engine: Yesterday 20:24
        </div>
        <button onclick="exportCurrentInventoryCsv()" class="w-full py-2 px-3 rounded-xl app-surface border border-token text-xs font-semibold hover:border-blue-400 transition">
          ⬇ Export Current View (.csv)
        </button>
      </div>
    </aside>

    <!-- MAIN CONTENT WORKSPACE -->
    <main class="flex-1 flex flex-col min-w-0 overflow-hidden">

      <!-- VIEW 1: AGENT OPERATIONS COMMAND CENTER + REPOSITORY EXPLORER -->
      <section id="view-explorer" class="flex-1 overflow-y-auto p-6 lg:p-8 space-y-7">

        <!-- TOP HEADER BANNER -->
        <div class="app-surface border border-token rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
          <div class="space-y-1.5 max-w-3xl">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
              <span>Sandeep Opportunity OS</span>
              <span>•</span>
              <span id="breadcrumbCurrent">Live Agent Sheet Cadence &amp; Operational Truth</span>
            </div>
            <h1 class="text-2xl font-bold tracking-tight">Agent Operations &amp; Live Spreadsheet Command Center</h1>
            <p id="breadcrumbSub" class="text-sm text-body">
              Honest real-time breakdown of what your agents touch <strong>every day</strong> (4x social sweeps, 6-hourly job engine, and the daily Deadline Dashboard with fresh Delhi fares), what runs on <strong>non-daily schedules</strong> (3-day Graduate Schemes, Monday-only Masters Admissions, batch Freelance Tracker), and what belongs to <strong>Spark Agent</strong>.
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2.5">
            <button onclick="openWorkbookInEditor('deadline-dashboard-daily', 'Daily Command & Deadlines')" class="px-4 py-2.5 rounded-xl text-sm btn-primary shadow-sm cursor-pointer">
              🎯 Open Daily Deadline Dashboard
            </button>
            <button onclick="openWorkbookInEditor('local-fb-insta-job-hunter', '00_59_Midnight_Sweep_Today')" class="px-4 py-2.5 rounded-xl text-sm app-elevated border border-token font-semibold hover:border-blue-400 transition cursor-pointer">
              💻 Inspect 00:59 Midnight Sweep
            </button>
          </div>
        </div>

        <!-- LIVE AGENT OPERATIONS MATRIX (3 HONEST TIERS) -->
        <div id="agentOperationsHub" class="space-y-6">

          <!-- TIER 1: TOUCHED EVERY DAY (LIVE DAILY) -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <h2 class="text-base font-bold tracking-tight">1. Updated Daily — Active Every Day (Main Agent + Daily Command View)</h2>
                <span class="badge-pos text-xs font-semibold px-2.5 py-0.5 rounded-md mono">4 Live Workbooks</span>
              </div>
              <span class="text-xs text-sec mono">Click any card to open its full multi-tab data in the Spreadsheet Editor</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <!-- Card 1: Deadline Dashboard -->
              <div onclick="openWorkbookInEditor('deadline-dashboard-daily', 'Daily Command & Deadlines')" class="agent-card app-surface border border-token rounded-2xl p-5 flex flex-col justify-between space-y-4 cursor-pointer">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between gap-2">
                    <span class="badge-pos text-[11px] font-bold px-2.5 py-0.5 rounded-md mono">● DAILY VIEW · LIVE</span>
                    <span class="mono text-xs text-sec">Updated Yesterday</span>
                  </div>
                  <h3 class="text-base font-bold text-[var(--text-main)]">Deadline Dashboard (Delhi Fares &amp; Cutoffs)</h3>
                  <p class="text-xs text-body leading-relaxed">
                    Your daily command view kept current as things change. Last updated yesterday with <strong>fresh New Delhi (DEL) fares (€382–€418 return)</strong>, university cutoffs, and daily priorities.
                  </p>
                </div>
                <div class="pt-3 border-t border-token space-y-2 text-xs">
                  <div class="flex justify-between"><span class="text-sec">Location:</span><span class="mono font-medium">Daily Command View</span></div>
                  <div class="flex justify-between"><span class="text-sec">Tabs (3):</span><span class="mono text-[var(--primary)]">Daily Command · Delhi Fares · Cutoffs</span></div>
                  <div class="flex gap-2 pt-1">
                    <button onclick="event.stopPropagation(); openWorkbookInEditor('deadline-dashboard-daily', 'Delhi Fares Tracker (DEL)')" class="flex-1 py-1.5 px-2.5 rounded-lg btn-primary text-xs">✈️ Delhi Fares Tab</button>
                    <button onclick="event.stopPropagation(); openDetailDrawer('deadline-dashboard-daily')" class="py-1.5 px-2.5 rounded-lg app-elevated border border-token text-xs font-medium hover:border-blue-400">Details</button>
                  </div>
                </div>
              </div>

              <!-- Card 2: FB - INSTA APPLICATIONS (Google Sheet in Drive) -->
              <div onclick="openWorkbookInEditor('1-jsydfLBJibFJjy4dabDCOZpG7m_6bJxdxPYRWHJ1x0', 'ALL LEADS')" class="agent-card app-surface border border-token rounded-2xl p-5 flex flex-col justify-between space-y-4 cursor-pointer">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between gap-2">
                    <span class="badge-pos text-[11px] font-bold px-2.5 py-0.5 rounded-md mono">● 4 SWEEPS / DAY</span>
                    <span class="mono text-xs text-sec">00:00 · 06:00 · 12:00 · 18:00</span>
                  </div>
                  <h3 class="text-base font-bold text-[var(--text-main)]">FB - INSTA APPLICATIONS</h3>
                  <p class="text-xs text-body leading-relaxed">
                    The <strong>Google Sheet in Drive</strong> for the Facebook &amp; Instagram job hunter. All 4 daily sweeps add new verified social leads and dated daily results directly to this sheet.
                  </p>
                </div>
                <div class="pt-3 border-t border-token space-y-2 text-xs">
                  <div class="flex justify-between"><span class="text-sec">Location:</span><span class="mono font-medium">Google Drive (01_SOCIAL_MEDIA_JOBBER)</span></div>
                  <div class="flex justify-between"><span class="text-sec">Tabs (2):</span><span class="mono text-[var(--primary)]">ALL LEADS · Daily Sweep Log</span></div>
                  <div class="flex gap-2 pt-1">
                    <button onclick="event.stopPropagation(); openWorkbookInEditor('1-jsydfLBJibFJjy4dabDCOZpG7m_6bJxdxPYRWHJ1x0', 'ALL LEADS')" class="flex-1 py-1.5 px-2.5 rounded-lg btn-primary text-xs">⊞ Open Sheet Grid</button>
                    <button onclick="event.stopPropagation(); openDetailDrawer('1-jsydfLBJibFJjy4dabDCOZpG7m_6bJxdxPYRWHJ1x0')" class="py-1.5 px-2.5 rounded-lg app-elevated border border-token text-xs font-medium hover:border-blue-400">Details</button>
                  </div>
                </div>
              </div>

              <!-- Card 3: SANDEEP_FACEBOOK_INSTAGRAM_JOB_HUNTER (Local Machine Workbook) -->
              <div onclick="openWorkbookInEditor('local-fb-insta-job-hunter', '00_59_Midnight_Sweep_Today')" class="agent-card app-surface border border-token rounded-2xl p-5 flex flex-col justify-between space-y-4 cursor-pointer">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between gap-2">
                    <span class="badge-pos text-[11px] font-bold px-2.5 py-0.5 rounded-md mono">● TODAY AT 00:59</span>
                    <span class="mono text-xs text-sec">Midnight Sweep</span>
                  </div>
                  <h3 class="text-base font-bold text-[var(--text-main)]">SANDEEP_FACEBOOK_INSTAGRAM_JOB_HUNTER</h3>
                  <p class="text-xs text-body leading-relaxed">
                    The <strong>local workbook on the agent machine</strong> (not in Drive) holding the same social-hunter data, updated by the same 4 daily sweeps. Last change was <strong>today at 00:59</strong>.
                  </p>
                </div>
                <div class="pt-3 border-t border-token space-y-2 text-xs">
                  <div class="flex justify-between"><span class="text-sec">Location:</span><span class="mono font-medium">Local Machine (Not in Drive)</span></div>
                  <div class="flex justify-between"><span class="text-sec">Tabs (3):</span><span class="mono text-[var(--primary)]">00:59 Sweep · ALL LEADS · Schedule</span></div>
                  <div class="flex gap-2 pt-1">
                    <button onclick="event.stopPropagation(); openWorkbookInEditor('local-fb-insta-job-hunter', '00_59_Midnight_Sweep_Today')" class="flex-1 py-1.5 px-2.5 rounded-lg btn-primary text-xs">⊞ Open 00:59 Sweep</button>
                    <button onclick="event.stopPropagation(); openDetailDrawer('local-fb-insta-job-hunter')" class="py-1.5 px-2.5 rounded-lg app-elevated border border-token text-xs font-medium hover:border-blue-400">Details</button>
                  </div>
                </div>
              </div>

              <!-- Card 4: MASTER_JOB_APPLICATION_TRACKER -->
              <div onclick="openWorkbookInEditor('1F8p-KNl8PLMfRIzRxZ0nFORRHOuF5qL1', 'Active Applications Master')" class="agent-card app-surface border border-token rounded-2xl p-5 flex flex-col justify-between space-y-4 cursor-pointer">
                <div class="space-y-2.5">
                  <div class="flex items-center justify-between gap-2">
                    <span class="badge-pos text-[11px] font-bold px-2.5 py-0.5 rounded-md mono">● 6-HOURLY + 08:30</span>
                    <span class="mono text-xs text-sec">Yesterday 20:24</span>
                  </div>
                  <h3 class="text-base font-bold text-[var(--text-main)]">MASTER_JOB_APPLICATION_TRACKER</h3>
                  <p class="text-xs text-body leading-relaxed">
                    Your main job application tracker. The <strong>6-hourly job engine</strong> and the <strong>weekday 08:30 job search</strong> update it whenever runs add or refresh rows. Last change: <strong>yesterday at 20:24</strong>.
                  </p>
                </div>
                <div class="pt-3 border-t border-token space-y-2 text-xs">
                  <div class="flex justify-between"><span class="text-sec">Location:</span><span class="mono font-medium">My Drive / JOB_CMS_AGENTS</span></div>
                  <div class="flex justify-between"><span class="text-sec">Tabs (3):</span><span class="mono text-[var(--primary)]">Active Master · Engine Log · Sheet1</span></div>
                  <div class="flex gap-2 pt-1">
                    <button onclick="event.stopPropagation(); openWorkbookInEditor('1F8p-KNl8PLMfRIzRxZ0nFORRHOuF5qL1', 'Active Applications Master')" class="flex-1 py-1.5 px-2.5 rounded-lg btn-primary text-xs">⊞ Open Tracker Grid</button>
                    <button onclick="event.stopPropagation(); openDetailDrawer('1F8p-KNl8PLMfRIzRxZ0nFORRHOuF5qL1')" class="py-1.5 px-2.5 rounded-lg app-elevated border border-token text-xs font-medium hover:border-blue-400">Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- TIER 2 & TIER 3 SIDE BY SIDE ON LAPTOP -->
          <div class="grid grid-cols-1 xl:grid-cols-12 gap-6">

            <!-- TIER 2: SCHEDULED / NON-DAILY TRACKERS (7 cols) -->
            <div class="xl:col-span-7 space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                  <h2 class="text-base font-bold tracking-tight">2. Not Daily — Scheduled &amp; Batch-Only Trackers</h2>
                </div>
                <span class="badge-pri text-xs font-semibold px-2.5 py-0.5 rounded-md mono">Do Not Expect Fresh Dates Daily</span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- Card 5: GRADUATE SCHEMES - MASTER TRACKER -->
                <div onclick="openWorkbookInEditor('1zGcyFrXBXQKOrmgJngXGYfIlYm1n1s_AV_DlHJ9tgtQ', 'ALL SCHEMES')" class="agent-card app-surface border border-token rounded-2xl p-4 flex flex-col justify-between space-y-3 cursor-pointer">
                  <div class="space-y-2">
                    <span class="badge-pri text-[11px] font-bold px-2 py-0.5 rounded-md mono inline-block">⏱️ EVERY 3 DAYS</span>
                    <h3 class="text-sm font-bold">GRADUATE SCHEMES - MASTER TRACKER</h3>
                    <p class="text-xs text-body leading-relaxed">
                      Updated <strong>every 3 days</strong>, not daily. Tracks UK &amp; EU graduate schemes (Canonical, Revolut, Booking.com, Stripe), portals, and deadlines.
                    </p>
                  </div>
                  <div class="pt-2.5 border-t border-token space-y-1.5 text-xs">
                    <div class="mono text-[11px] text-sec">Tabs: ALL SCHEMES · PORTALS · DEADLINES</div>
                    <button onclick="event.stopPropagation(); openWorkbookInEditor('1zGcyFrXBXQKOrmgJngXGYfIlYm1n1s_AV_DlHJ9tgtQ', 'ALL SCHEMES')" class="w-full py-1.5 rounded-lg app-elevated border border-token font-semibold hover:border-blue-400">⊞ Inspect 3 Tabs</button>
                  </div>
                </div>

                <!-- Card 6: master-spreadsheet.xlsx (Masters Admissions) -->
                <div onclick="openWorkbookInEditor('156pTG6IBQ00x6AP2BFm3sg-zy_iZ4PLj', 'Masters Admissions (Mondays 09:58)')" class="agent-card app-surface border border-token rounded-2xl p-4 flex flex-col justify-between space-y-3 cursor-pointer">
                  <div class="space-y-2">
                    <span class="badge-pri text-[11px] font-bold px-2 py-0.5 rounded-md mono inline-block">📅 MONDAYS ONLY (09:58)</span>
                    <h3 class="text-sm font-bold">master-spreadsheet.xlsx (Masters Admissions)</h3>
                    <p class="text-xs text-body leading-relaxed">
                      Updated on <strong>Mondays only</strong>. Last updated <strong>yesterday at 09:58</strong>. Tracks TUM, UCY, ETH Zurich, KTH, Aalto &amp; scholarships.
                    </p>
                  </div>
                  <div class="pt-2.5 border-t border-token space-y-1.5 text-xs">
                    <div class="mono text-[11px] text-sec">Last Sync: Yesterday 09:58</div>
                    <button onclick="event.stopPropagation(); openWorkbookInEditor('156pTG6IBQ00x6AP2BFm3sg-zy_iZ4PLj', 'Masters Admissions (Mondays 09:58)')" class="w-full py-1.5 rounded-lg app-elevated border border-token font-semibold hover:border-blue-400">⊞ Inspect Admissions</button>
                  </div>
                </div>

                <!-- Card 7: Freelance Lead Tracker -->
                <div onclick="openWorkbookInEditor('local-freelance-lead-tracker', 'Batch Leads Queue')" class="agent-card app-surface border border-token rounded-2xl p-4 flex flex-col justify-between space-y-3 cursor-pointer">
                  <div class="space-y-2">
                    <span class="badge-purp text-[11px] font-bold px-2 py-0.5 rounded-md mono inline-block">📦 ON-DEMAND BATCH ONLY</span>
                    <h3 class="text-sm font-bold">Freelance Lead Tracker (Local File)</h3>
                    <p class="text-xs text-body leading-relaxed">
                      <strong>Local file</strong> on machine. Updated <strong>only when a freelance batch runs</strong>, not on a daily schedule. Tracks Cyprus &amp; UK web redesign leads.
                    </p>
                  </div>
                  <div class="pt-2.5 border-t border-token space-y-1.5 text-xs">
                    <div class="mono text-[11px] text-sec">Cadence: Batch-Triggered Only</div>
                    <button onclick="event.stopPropagation(); openWorkbookInEditor('local-freelance-lead-tracker', 'Batch Leads Queue')" class="w-full py-1.5 rounded-lg app-elevated border border-token font-semibold hover:border-blue-400">⊞ Inspect Batch Leads</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- TIER 3: SPARK AGENT REGIONAL SHEETS (5 cols) -->
            <div class="xl:col-span-5 space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <h2 class="text-base font-bold tracking-tight">3. External Agent Ownership — Belong to Spark</h2>
                </div>
                <span class="badge-warn text-xs font-semibold px-2.5 py-0.5 rounded-md mono">Main Agent Access Refused</span>
              </div>

              <div class="app-surface border border-token rounded-2xl p-4 space-y-3.5">
                <p class="text-xs text-body leading-relaxed">
                  The <strong>India, EU, UK, and USA</strong> regional job sheets belong to <strong>Spark</strong> (<span class="mono">papakattu@gmail.com</span> / Projects KattuAI). Your primary agent does not update these and its direct file access is refused. They are indexed below as read-only mirrors so you can still inspect their contents here:
                </p>
                <div class="grid grid-cols-2 gap-2.5 text-xs">
                  <button onclick="openWorkbookInEditor('15hOKXuvZDIrytvqRLQNvLQx4w7wTdFS-DSnvT1XIkOw', '16 Oct 2026')" class="p-3 rounded-xl app-elevated border border-token text-left hover:border-amber-400 transition flex items-center justify-between cursor-pointer">
                    <div>
                      <div class="font-bold">🇮🇳 India Jobs</div>
                      <div class="text-[11px] text-sec mono">Spark Agent · 6 roles</div>
                    </div>
                    <span class="badge-warn text-[10px] px-1.5 py-0.5 rounded mono">Spark</span>
                  </button>
                  <button onclick="openWorkbookInEditor('1wi4i3qpDLOzfNXa5_AR6Bvhb4w40xTr4QQmM9qGAzj4', '16 Oct 2026')" class="p-3 rounded-xl app-elevated border border-token text-left hover:border-amber-400 transition flex items-center justify-between cursor-pointer">
                    <div>
                      <div class="font-bold">🇪🇺 Eu Jobs</div>
                      <div class="text-[11px] text-sec mono">Spark Agent · 5 roles</div>
                    </div>
                    <span class="badge-warn text-[10px] px-1.5 py-0.5 rounded mono">Spark</span>
                  </button>
                  <button onclick="openWorkbookInEditor('1ECo6MFxrDXpOQlTyCRGor5XUgE8e4t2zL-LXWJRFN5A', '16 Oct 2026')" class="p-3 rounded-xl app-elevated border border-token text-left hover:border-amber-400 transition flex items-center justify-between cursor-pointer">
                    <div>
                      <div class="font-bold">🇬🇧 Uk Jobs</div>
                      <div class="text-[11px] text-sec mono">Spark Agent · 7 roles</div>
                    </div>
                    <span class="badge-warn text-[10px] px-1.5 py-0.5 rounded mono">Spark</span>
                  </button>
                  <button onclick="openWorkbookInEditor('1tIi0TiQ0L1fNUcqTWTsRVJhV-69g3pbrHGGkhmGGvyo', '16 Oct 2026')" class="p-3 rounded-xl app-elevated border border-token text-left hover:border-amber-400 transition flex items-center justify-between cursor-pointer">
                    <div>
                      <div class="font-bold">🇺🇸 USA Jobs</div>
                      <div class="text-[11px] text-sec mono">Spark Agent · 4 roles</div>
                    </div>
                    <span class="badge-warn text-[10px] px-1.5 py-0.5 rounded mono">Spark</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- FILTER BAR & FULL WORKBOOK DIRECTORY TABLE -->
        <div class="space-y-4 pt-2">
          <div class="app-surface border border-token rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
            <!-- Smart Filter Pills -->
            <div class="flex flex-wrap items-center gap-1.5 text-xs" id="smartFilterPills">
              <button onclick="setSmartFilter('agent_ops')" data-filter="agent_ops" class="filter-pill px-3 py-1.5 rounded-xl font-semibold">⚡ Core Agent Sheets (11)</button>
              <button onclick="setSmartFilter('daily_only')" data-filter="daily_only" class="filter-pill px-3 py-1.5 rounded-xl font-medium">🟢 Touched Daily (4)</button>
              <button onclick="setSmartFilter('scheduled_only')" data-filter="scheduled_only" class="filter-pill px-3 py-1.5 rounded-xl font-medium">🔵 Non-Daily Scheduled (3)</button>
              <button onclick="setSmartFilter('spark_only')" data-filter="spark_only" class="filter-pill px-3 py-1.5 rounded-xl font-medium">🔒 Spark Agent Sheets (4)</button>
              <button onclick="setSmartFilter('oct_active')" data-filter="oct_active" class="filter-pill px-3 py-1.5 rounded-xl font-medium">Active in Oct (76)</button>
              <button onclick="setSmartFilter('all')" data-filter="all" class="filter-pill px-3 py-1.5 rounded-xl font-medium">All Workbooks (158)</button>
              <button onclick="setSmartFilter('gsheets')" data-filter="gsheets" class="filter-pill px-3 py-1.5 rounded-xl font-medium">Google Sheets</button>
              <button onclick="setSmartFilter('excel')" data-filter="excel" class="filter-pill px-3 py-1.5 rounded-xl font-medium">Excel / Local</button>
              <button onclick="setSmartFilter('attention')" data-filter="attention" class="filter-pill px-3 py-1.5 rounded-xl font-medium">Needs Attention</button>
            </div>

            <!-- Right Filter Controls -->
            <div class="flex flex-wrap items-center gap-2 text-xs">
              <select id="workspaceFilterSelect" onchange="selectWorkspaceFilter(this.value)" aria-label="Filter by Business Workspace" class="app-elevated border border-token rounded-xl px-3 py-1.5 text-xs font-medium cursor-pointer">
                <option value="ALL">All Workspaces (158)</option>
                <option value="Career HQ">Career HQ &amp; JOBER</option>
                <option value="Orama Design & Build">Orama Design &amp; Build</option>
                <option value="BusinessLending.uk">BusinessLending.uk</option>
                <option value="KattuAI & Shared">Spark / KattuAI Shared</option>
                <option value="Leads & B2B Engines">Leads &amp; Freelance</option>
                <option value="SEO, Ops & Archive">Admissions, SEO &amp; Ops</option>
              </select>

              <select id="sortBySelect" onchange="handleSortChange(this.value)" aria-label="Sort inventory column" class="app-elevated border border-token rounded-xl px-3 py-1.5 text-xs font-medium cursor-pointer">
                <option value="modified_desc">Sort: Last Updated (Newest)</option>
                <option value="created_desc">Sort: Created Date (Newest)</option>
                <option value="title_asc">Sort: Workbook Name (A→Z)</option>
                <option value="tabs_desc">Sort: Tab Count (High→Low)</option>
                <option value="size_desc">Sort: File Size (High→Low)</option>
              </select>

              <div class="inline-flex rounded-xl border border-token app-elevated p-0.5">
                <button onclick="setExplorerLayout('table')" id="layoutBtn-table" class="px-3 py-1 rounded-lg text-xs font-semibold btn-primary">Table</button>
                <button onclick="setExplorerLayout('cards')" id="layoutBtn-cards" class="px-3 py-1 rounded-lg text-xs font-medium">Cards</button>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between px-1 text-xs text-sec">
            <div id="explorerCountLabel" class="mono font-medium">Showing workbooks</div>
            <div>Click any row to open its live data in the <strong>Full Spreadsheet Editor</strong>, or click <strong>Provenance</strong> for schedule &amp; ownership details.</div>
          </div>

          <!-- TABLE CONTAINER -->
          <div id="explorerTableContainer" class="app-surface border border-token rounded-2xl overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse explorer-row">
                <thead>
                  <tr class="app-elevated border-b border-strong text-[11.5px] uppercase tracking-wider text-sec">
                    <th class="w-10 text-center">★</th>
                    <th>Workbook Title &amp; Location Path</th>
                    <th>Agent Schedule / Cadence</th>
                    <th>Type &amp; Storage</th>
                    <th>Workspace</th>
                    <th>Owner &amp; Access</th>
                    <th>Last Updated (<span class="tz-col-label">Nicosia</span>)</th>
                    <th class="text-center">Tabs</th>
                    <th class="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody id="explorerTableBody" class="divide-y border-token tabular-nums"></tbody>
              </table>
            </div>
          </div>

          <!-- CARDS CONTAINER -->
          <div id="explorerCardsContainer" class="hidden grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"></div>
        </div>

      </section>

      <!-- VIEW 2: FULL SPREADSHEET EDITOR CANVAS -->
      <section id="view-editor" class="hidden flex-1 flex flex-col min-h-0 overflow-hidden">
        <!-- Editor Top Bar -->
        <div class="app-surface border-b border-token px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3 min-w-0">
            <button onclick="switchMainView('explorer')" class="px-3 py-1.5 rounded-xl app-elevated border border-token text-xs font-semibold hover:border-blue-400 transition cursor-pointer">
              ← Back to Command Center
            </button>
            <select id="editorWorkbookSelect" onchange="openWorkbookInEditor(this.value)" aria-label="Select workbook to inspect" class="app-elevated border border-token rounded-xl px-3.5 py-1.5 text-sm font-bold max-w-md truncate cursor-pointer"></select>
            <span id="editorFormatBadge" class="badge-pos text-xs font-semibold px-2.5 py-1 rounded-lg">Google Sheet</span>
            <span id="editorCadenceBadge" class="badge-pri text-xs font-semibold px-2.5 py-1 rounded-lg mono">Live Daily</span>
          </div>

          <div class="flex items-center gap-2 flex-wrap">
            <button onclick="toggleWriteBackMode()" id="writeModeBtn" class="px-3 py-1.5 rounded-xl text-xs font-semibold badge-pos border border-token cursor-pointer">
              ✏️ Interactive Edit Mode Active (Double-Click Any Cell)
            </button>
            <button onclick="createCheckpointSnapshot()" class="px-3 py-1.5 rounded-xl text-xs app-elevated border border-token font-medium hover:border-blue-400 cursor-pointer">
              🛡️ Checkpoint (<span id="checkpointCount">1</span>)
            </button>
            <button onclick="openDetailDrawer(currentWorkbookId)" class="px-3 py-1.5 rounded-xl text-xs app-elevated border border-token font-medium hover:border-blue-400 cursor-pointer">
              ℹ️ Provenance &amp; Schedule
            </button>
            <a id="editorNativeLink" href="https://docs.google.com" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 rounded-xl text-xs btn-primary">
              ↗ Open Source Link
            </a>
          </div>
        </div>

        <!-- Editor Formatting & Sheet Search Bar -->
        <div class="app-elevated border-b border-token px-6 py-2 flex flex-wrap items-center gap-2 text-xs">
          <button onclick="editorUndo()" class="px-2.5 py-1 rounded-lg app-surface border border-token hover:border-blue-400 font-medium" title="Undo">↶ Undo</button>
          <button onclick="editorRedo()" class="px-2.5 py-1 rounded-lg app-surface border border-token hover:border-blue-400 font-medium" title="Redo">↷ Redo</button>
          <span class="text-sec px-1">|</span>
          <button onclick="toggleCellFormat('bold')" class="px-2.5 py-1 rounded-lg app-surface border border-token font-bold hover:border-blue-400">B</button>
          <button onclick="toggleCellFormat('italic')" class="px-2.5 py-1 rounded-lg app-surface border border-token italic hover:border-blue-400">I</button>
          <button onclick="setCellAlign('left')" class="px-2.5 py-1 rounded-lg app-surface border border-token hover:border-blue-400">⇤ Left</button>
          <button onclick="setCellAlign('center')" class="px-2.5 py-1 rounded-lg app-surface border border-token hover:border-blue-400">⇔ Center</button>
          <button onclick="setCellAlign('right')" class="px-2.5 py-1 rounded-lg app-surface border border-token hover:border-blue-400">⇥ Right</button>
          <span class="text-sec px-1">|</span>
          <button onclick="editorAddRow()" class="px-2.5 py-1 rounded-lg app-surface border border-token hover:border-blue-400 font-medium">+ Add Row</button>
          <button onclick="editorAddCol()" class="px-2.5 py-1 rounded-lg app-surface border border-token hover:border-blue-400 font-medium">+ Add Column</button>
          <button onclick="exportActiveSheetCsv()" class="px-2.5 py-1 rounded-lg app-surface border border-token hover:border-blue-400 font-medium">⬇ Export Tab (.csv)</button>

          <div class="ml-auto flex items-center gap-3">
            <input id="sheetSearchInput" type="text" oninput="handleSheetSearch(this.value)" placeholder="Filter rows in current tab..." class="app-surface border border-token rounded-lg px-3 py-1 text-xs w-56 focus:outline-none focus:ring-1 focus:ring-blue-400" />
            <span id="saveStateIndicator" class="text-xs mono text-sec">Ready · Double-click any cell to edit</span>
          </div>
        </div>

        <!-- Formula Bar -->
        <div class="app-surface border-b border-token px-6 py-2 flex items-center gap-3">
          <div id="activeCellCoord" class="mono text-xs font-bold px-3 py-1 rounded-lg app-elevated border border-token min-w-[64px] text-center text-[var(--primary)]">
            A1
          </div>
          <div class="mono text-xs font-bold italic text-sec">fx</div>
          <input
            id="formulaBarInput"
            type="text"
            onkeydown="handleFormulaBarKey(event)"
            oninput="handleFormulaBarInput(this.value)"
            placeholder="Select a cell or enter value / formula (=SUM(C2:C7), =AVERAGE(H2:H6), =MIN(H2:H6))..."
            class="flex-1 app-elevated border border-token rounded-lg px-3 py-1.5 text-xs mono focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onclick="commitFormulaBar()" class="px-3.5 py-1.5 rounded-lg text-xs btn-primary">Apply Value</button>
        </div>

        <!-- Grid Canvas -->
        <div id="gridScrollContainer" class="flex-1 overflow-auto app-surface relative">
          <table class="grid-table w-full" id="spreadsheetGridTable">
            <thead id="spreadsheetGridHead"></thead>
            <tbody id="spreadsheetGridBody" class="tabular-nums"></tbody>
          </table>
        </div>

        <!-- Bottom Sheet Tabs Bar -->
        <div class="app-elevated border-t border-token px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div class="flex items-center gap-1.5 overflow-x-auto max-w-full" id="sheetTabsBar"></div>
          <div class="flex items-center gap-4 mono text-xs text-sec shrink-0">
            <span>Rows: <strong id="statRowCount" class="text-[var(--text-main)]">0</strong></span>
            <span>Cols: <strong id="statColCount" class="text-[var(--text-main)]">0</strong></span>
            <span>Numeric Sum: <strong id="statSum" class="text-[var(--primary)]">0</strong></span>
            <span>Numeric Avg: <strong id="statAvg" class="text-[var(--positive)]">0</strong></span>
          </div>
        </div>
      </section>

      <!-- VIEW 3: SYSTEM ARCHITECTURE & BLUEPRINT -->
      <section id="view-blueprint" class="hidden flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">
        <div class="app-surface border border-token rounded-2xl p-6 space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span class="badge-pri text-xs font-semibold px-2.5 py-0.5 rounded-md uppercase tracking-wider">Architecture Specification</span>
              <h1 class="text-xl font-bold mt-1.5">Sandeep Workspace &amp; Multi-Agent Architecture Blueprint</h1>
              <p class="text-sm text-sec">How the Calm Command Center, 4x Daily Sweeps, 6-Hourly Job Engine, and Univer Grid Canvas operate together.</p>
            </div>
            <button onclick="switchMainView('explorer')" class="px-4 py-2 rounded-xl text-xs btn-primary">
              ← Return to Command Center
            </button>
          </div>
          <div class="flex flex-wrap gap-2 pt-3 border-t border-token text-xs">
            <button onclick="selectBlueprintModule(1)" id="bpBtn-1" class="px-3.5 py-2 rounded-xl font-semibold btn-primary">1. Calm Command Center Tokens</button>
            <button onclick="selectBlueprintModule(2)" id="bpBtn-2" class="px-3.5 py-2 rounded-xl font-medium app-elevated border border-token">2. Multi-Agent Sync Cadences</button>
            <button onclick="selectBlueprintModule(3)" id="bpBtn-3" class="px-3.5 py-2 rounded-xl font-medium app-elevated border border-token">3. Four-Timestamp Separation</button>
            <button onclick="selectBlueprintModule(4)" id="bpBtn-4" class="px-3.5 py-2 rounded-xl font-medium app-elevated border border-token">4. Spreadsheet Grid &amp; Formula Engine</button>
            <button onclick="selectBlueprintModule(5)" id="bpBtn-5" class="px-3.5 py-2 rounded-xl font-medium app-elevated border border-token">5. Permission Boundaries (Spark vs Main)</button>
          </div>
        </div>
        <div id="blueprintModuleContent" class="grid grid-cols-1 lg:grid-cols-2 gap-6"></div>
      </section>

      <!-- VIEW 4: AGENT & CONNECTOR REGISTRY -->
      <section id="view-connectors" class="hidden flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">
        <div class="app-surface border border-token rounded-2xl p-6 space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-lg font-bold">Agent Schedule, Storage &amp; Access Permission Registry</h2>
              <p class="text-sm text-sec">Exact verification of which sheets live in Google Drive vs Local Machine vs Spark Agent's workspace.</p>
            </div>
            <button onclick="runLiveConnectorAuditToast()" class="px-4 py-2 rounded-xl text-xs btn-primary">↻ Verify Agent Sync State</button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse explorer-row">
              <thead>
                <tr class="app-elevated border-b border-strong text-xs uppercase tracking-wider text-sec">
                  <th>Workbook / Sheet Name</th>
                  <th>Storage Location</th>
                  <th>Update Schedule / Cadence</th>
                  <th>Last Verified Touch</th>
                  <th>Agent Ownership &amp; Access</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody class="divide-y border-token text-sm tabular-nums">
                <tr>
                  <td class="font-bold">Deadline Dashboard (Delhi Fares &amp; Cutoffs)</td>
                  <td class="mono text-xs">Daily Command View (Local + Synced)</td>
                  <td><span class="badge-pos px-2 py-0.5 rounded text-xs font-semibold">DAILY VIEW (As Things Change)</span></td>
                  <td class="mono text-xs">Yesterday (Fresh Delhi Fares)</td>
                  <td>Main Agent (Full Read/Write)</td>
                  <td><button onclick="openWorkbookInEditor('deadline-dashboard-daily', 'Delhi Fares Tracker (DEL)')" class="px-3 py-1 rounded-lg btn-primary text-xs">Open Fares</button></td>
                </tr>
                <tr>
                  <td class="font-bold">FB - INSTA APPLICATIONS</td>
                  <td class="mono text-xs">Google Drive (Google Sheet)</td>
                  <td><span class="badge-pos px-2 py-0.5 rounded text-xs font-semibold">4x DAILY (00:00, 06:00, 12:00, 18:00)</span></td>
                  <td class="mono text-xs">Daily Sweeps Active</td>
                  <td>Main Agent (Google Sheets API v4)</td>
                  <td><button onclick="openWorkbookInEditor('1-jsydfLBJibFJjy4dabDCOZpG7m_6bJxdxPYRWHJ1x0', 'ALL LEADS')" class="px-3 py-1 rounded-lg btn-primary text-xs">Open Sheet</button></td>
                </tr>
                <tr>
                  <td class="font-bold">SANDEEP_FACEBOOK_INSTAGRAM_JOB_HUNTER</td>
                  <td class="mono text-xs">Local Machine Workbook (Not in Drive)</td>
                  <td><span class="badge-pos px-2 py-0.5 rounded text-xs font-semibold">4x DAILY (00:00, 06:00, 12:00, 18:00)</span></td>
                  <td class="mono text-xs font-bold text-emerald-400">Today at 00:59 (Midnight Sweep)</td>
                  <td>Main Agent (Local Machine File)</td>
                  <td><button onclick="openWorkbookInEditor('local-fb-insta-job-hunter', '00_59_Midnight_Sweep_Today')" class="px-3 py-1 rounded-lg btn-primary text-xs">Open 00:59</button></td>
                </tr>
                <tr>
                  <td class="font-bold">MASTER_JOB_APPLICATION_TRACKER.xlsx</td>
                  <td class="mono text-xs">Google Drive (My Drive / JOB_CMS_AGENTS)</td>
                  <td><span class="badge-pos px-2 py-0.5 rounded text-xs font-semibold">6-Hourly Engine + Weekday 08:30</span></td>
                  <td class="mono text-xs">Yesterday at 20:24</td>
                  <td>Main Agent (Full Read/Write)</td>
                  <td><button onclick="openWorkbookInEditor('1F8p-KNl8PLMfRIzRxZ0nFORRHOuF5qL1', 'Active Applications Master')" class="px-3 py-1 rounded-lg btn-primary text-xs">Open Tracker</button></td>
                </tr>
                <tr>
                  <td class="font-bold">GRADUATE SCHEMES - MASTER TRACKER</td>
                  <td class="mono text-xs">Google Drive (02_GRADUATE_SCHEMES)</td>
                  <td><span class="badge-pri px-2 py-0.5 rounded text-xs font-semibold">Every 3 Days (Not Daily)</span></td>
                  <td class="mono text-xs">3-Day Cadence</td>
                  <td>Main Agent (Full Read/Write)</td>
                  <td><button onclick="openWorkbookInEditor('1zGcyFrXBXQKOrmgJngXGYfIlYm1n1s_AV_DlHJ9tgtQ', 'ALL SCHEMES')" class="px-3 py-1 rounded-lg app-elevated border border-token text-xs">Open Sheet</button></td>
                </tr>
                <tr>
                  <td class="font-bold">master-spreadsheet.xlsx (Masters Admissions)</td>
                  <td class="mono text-xs">Google Drive (.xlsx)</td>
                  <td><span class="badge-pri px-2 py-0.5 rounded text-xs font-semibold">Mondays Only (Not Daily)</span></td>
                  <td class="mono text-xs">Yesterday at 09:58</td>
                  <td>Main Agent (Weekly Sync)</td>
                  <td><button onclick="openWorkbookInEditor('156pTG6IBQ00x6AP2BFm3sg-zy_iZ4PLj', 'Masters Admissions (Mondays 09:58)')" class="px-3 py-1 rounded-lg app-elevated border border-token text-xs">Open Sheet</button></td>
                </tr>
                <tr>
                  <td class="font-bold">Freelance Lead Tracker</td>
                  <td class="mono text-xs">Local Machine File</td>
                  <td><span class="badge-purp px-2 py-0.5 rounded text-xs font-semibold">When Freelance Batch Runs Only</span></td>
                  <td class="mono text-xs">Last Batch Run (24 Oct)</td>
                  <td>Main Agent (Local File)</td>
                  <td><button onclick="openWorkbookInEditor('local-freelance-lead-tracker', 'Batch Leads Queue')" class="px-3 py-1 rounded-lg app-elevated border border-token text-xs">Open Sheet</button></td>
                </tr>
                <tr>
                  <td class="font-bold">India Jobs, EU Jobs, UK Jobs, USA Jobs</td>
                  <td class="mono text-xs">Shared Drive (Projects KattuAI)</td>
                  <td><span class="badge-warn px-2 py-0.5 rounded text-xs font-semibold">External Agent (Spark)</span></td>
                  <td class="mono text-xs">19–21 Oct 2026</td>
                  <td><span class="badge-err px-2 py-0.5 rounded text-xs">Owned by Spark · Main Agent Access Refused</span></td>
                  <td><button onclick="selectNavPreset('spark_sheets')" class="px-3 py-1 rounded-lg app-elevated border border-token text-xs">View Mirrors</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- VIEW 5: DATA FIDELITY MATRIX -->
      <section id="view-matrix" class="hidden flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">
        <div class="app-surface border border-token rounded-2xl p-6 space-y-4">
          <h2 class="text-lg font-bold">Per-Source Capability, Data Fidelity &amp; Verification Matrix</h2>
          <p class="text-sm text-sec">Explicit engineering guarantees across Google Sheets, Local Machine Workbooks, Shared Spark Mirrors, and Drive <code class="mono">.xlsx</code> files.</p>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse explorer-row">
              <thead>
                <tr class="app-elevated border-b border-strong text-xs uppercase tracking-wider text-sec">
                  <th>Capability / Operation</th>
                  <th>Google Sheets (API v4)</th>
                  <th>Local Machine Workbooks</th>
                  <th>Google Drive Binary (.xlsx)</th>
                  <th>Spark Agent Shared Sheets</th>
                </tr>
              </thead>
              <tbody class="divide-y border-token text-sm">
                <tr>
                  <td class="font-semibold">Cadence &amp; Schedule Tracking</td>
                  <td><span class="badge-pos px-2 py-0.5 rounded text-xs">VERIFIED (4x Daily / 3-Day)</span></td>
                  <td><span class="badge-pos px-2 py-0.5 rounded text-xs">VERIFIED (00:59 Sweep &amp; Batch)</span></td>
                  <td><span class="badge-pos px-2 py-0.5 rounded text-xs">VERIFIED (6-Hourly &amp; Mondays)</span></td>
                  <td><span class="badge-warn px-2 py-0.5 rounded text-xs">EXTERNAL (Owned by Spark)</span></td>
                </tr>
                <tr>
                  <td class="font-semibold">Multi-Tab Cell &amp; Formula Inspection</td>
                  <td><span class="badge-pos px-2 py-0.5 rounded text-xs">VERIFIED (Live Grid)</span></td>
                  <td><span class="badge-pos px-2 py-0.5 rounded text-xs">VERIFIED (Mirrored in UI)</span></td>
                  <td><span class="badge-pos px-2 py-0.5 rounded text-xs">VERIFIED (ExcelJS / Grid)</span></td>
                  <td><span class="badge-pos px-2 py-0.5 rounded text-xs">READ-ONLY SNAPSHOT</span></td>
                </tr>
                <tr>
                  <td class="font-semibold">Write-Back &amp; Access Policy</td>
                  <td><span class="badge-pos px-2 py-0.5 rounded text-xs">Editable (API v4 Range Patch)</span></td>
                  <td><span class="badge-pri px-2 py-0.5 rounded text-xs">Local Daemon Sweep Write</span></td>
                  <td><span class="badge-pri px-2 py-0.5 rounded text-xs">Engine &amp; Replica Export</span></td>
                  <td><span class="badge-err px-2 py-0.5 rounded text-xs">Access Refused to Main Agent</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- VIEW 6: LOCAL IMPORT -->
      <section id="view-imports" class="hidden flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">
        <div class="app-surface border border-token rounded-2xl p-6 max-w-2xl space-y-4">
          <h2 class="text-lg font-bold">Import Local CSV / TSV Spreadsheet Replica</h2>
          <p class="text-sm text-sec">Upload any local <code class="mono">.csv</code> or <code class="mono">.tsv</code> file from your laptop to inspect and edit it immediately inside the Spreadsheet Editor.</p>
          <div class="border-2 border-dashed border-strong rounded-2xl p-8 text-center space-y-3 app-elevated">
            <div class="text-base font-semibold">Select a local <code class="mono">.csv</code> or <code class="mono">.tsv</code> file</div>
            <input type="file" id="localFileInput" accept=".csv,.tsv,.txt" onchange="handleLocalFileImport(event)" class="text-sm mx-auto block cursor-pointer" />
          </div>
          <div id="importResultStatus" class="text-sm text-sec"></div>
        </div>
      </section>

    </main>

    <!-- SLIDE-OVER PROVENANCE & SCHEDULE DRAWER -->
    <aside id="detailDrawer" class="hidden w-[420px] max-w-full app-surface border-l border-token p-6 overflow-y-auto z-20 space-y-4 shrink-0">
      <div class="flex items-center justify-between border-b border-token pb-3">
        <div class="text-xs font-bold uppercase tracking-wider text-sec">Workbook Provenance &amp; Agent Schedule</div>
        <button onclick="closeDetailDrawer()" class="px-2.5 py-1 rounded-lg app-elevated border border-token text-xs font-semibold hover:border-blue-400">✕ Close</button>
      </div>
      <div id="detailDrawerBody" class="space-y-4 text-sm"></div>
    </aside>

  </div>

  <!-- COMMAND PALETTE MODAL (⌘K) -->
  <div id="commandPaletteModal" class="hidden fixed inset-0 z-50 flex items-start justify-center pt-20 px-4" style="background: rgba(8, 13, 22, 0.72);">
    <div class="app-surface border border-strong rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">
      <div class="p-4 border-b border-token flex items-center gap-3">
        <span class="text-sec text-base font-bold">⌘</span>
        <input id="cmdPaletteInput" type="text" oninput="renderCommandPaletteResults(this.value)" placeholder="Jump to any sheet, Delhi fares, 00:59 sweep, Masters Admissions, or command..." class="w-full bg-transparent text-sm focus:outline-none" />
        <button onclick="closeCommandPalette()" class="text-xs mono px-2 py-1 rounded-lg app-elevated border border-token text-sec">ESC</button>
      </div>
      <div id="cmdPaletteList" class="max-h-96 overflow-y-auto p-2.5 space-y-1 text-sm"></div>
    </div>
  </div>

  <!-- TOAST NOTIFICATION -->
  <div id="workspaceToast" class="hidden fixed bottom-5 right-5 z-50 app-surface border border-strong rounded-xl px-4 py-3 shadow-2xl text-sm font-medium flex items-center gap-2.5">
    <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
    <span id="workspaceToastText">Action completed</span>
  </div>
`;
