'use client';

import React, { useEffect, useRef } from 'react';
import { Univer, UniverInstanceType, LocaleType } from '@univerjs/core';
import { defaultTheme } from '@univerjs/design';
import { UniverRenderEnginePlugin } from '@univerjs/engine-render';
import { UniverFormulaEnginePlugin } from '@univerjs/engine-formula';
import { UniverSheetsPlugin } from '@univerjs/sheets';
import { UniverSheetsUIPlugin } from '@univerjs/sheets-ui';
import { UniverSheetsFormulaPlugin } from '@univerjs/sheets-formula';

export interface UniverCanvasProps {
  workbookId: string;
  workbookTitle: string;
  sheetsData: Record<string, (string | number)[][]>;
  readOnly: boolean;
}

export function UniverSpreadsheetCanvas({
  workbookId,
  workbookTitle,
  sheetsData,
  readOnly,
}: UniverCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const univer = new Univer({
      theme: defaultTheme,
      locale: LocaleType.EN_US,
    });

    univer.registerPlugin(UniverRenderEnginePlugin);
    univer.registerPlugin(UniverFormulaEnginePlugin);
    univer.registerPlugin(UniverSheetsPlugin);
    univer.registerPlugin(UniverSheetsUIPlugin, { container: containerRef.current });
    univer.registerPlugin(UniverSheetsFormulaPlugin);

    const sheetOrder: string[] = [];
    const sheets: Record<string, unknown> = {};

    Object.entries(sheetsData).forEach(([tabName, rows], idx) => {
      const sheetId = `sheet_${idx + 1}`;
      sheetOrder.push(sheetId);
      const cellData: Record<number, Record<number, { v: string | number }>> = {};
      rows.forEach((rArr, rIdx) => {
        cellData[rIdx] = {};
        rArr.forEach((val, cIdx) => {
          cellData[rIdx]![cIdx] = { v: val };
        });
      });
      sheets[sheetId] = {
        id: sheetId,
        name: tabName,
        cellData,
        rowCount: Math.max(50, rows.length + 20),
        columnCount: Math.max(20, (rows[0]?.length ?? 10) + 6),
      };
    });

    univer.createUnit(UniverInstanceType.UNIVER_SHEET, {
      id: workbookId,
      name: workbookTitle,
      sheetOrder,
      sheets,
    });

    return () => {
      univer.dispose();
    };
  }, [workbookId, workbookTitle, sheetsData, readOnly]);

  return <div ref={containerRef} className="w-full h-full min-h-[540px]" />;
}
