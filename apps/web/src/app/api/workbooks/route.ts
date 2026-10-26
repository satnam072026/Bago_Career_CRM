import { NextResponse } from 'next/server';
import verifiedInventory from '../../../data/verified_inventory.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get('filter') ?? 'oct_active';
  const workspace = searchParams.get('workspace') ?? 'ALL';
  const q = (searchParams.get('q') ?? '').trim().toLowerCase();

  const items = verifiedInventory.filter((wb) => {
    if (filter === 'oct_active' && !wb.activeInOct2026) return false;
    if (filter === 'oct_created' && !wb.createdInOct2026) return false;
    if (filter === 'oct_modified' && !wb.modifiedInOct2026) return false;
    if (filter === 'oct_viewed' && !wb.viewedInOct2026) return false;
    if (workspace !== 'ALL' && wb.workspace !== workspace) return false;
    if (q) {
      const hay = `${wb.title} ${wb.workspace} ${wb.owner} ${wb.folderPath} ${wb.tabs.join(' ')}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  return NextResponse.json({
    scanTimestampUtc: '2026-10-26T21:38:00Z',
    timezone: 'Europe/Nicosia',
    totalDiscovered: verifiedInventory.length,
    filteredCount: items.length,
    items,
  });
}
