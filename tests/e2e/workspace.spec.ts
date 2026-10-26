import { test, expect } from '@playwright/test';

test.describe('Sandeep Workspace Enterprise E2E', () => {
  test('renders October 2026 register with 73 verified workbooks and opens Univer editor', async ({ page }) => {
    await page.goto('/sandeep_workspace_live_preview.html');
    await expect(page.locator('text=Sandeep Workspace')).toBeVisible();
    await expect(page.locator('text=Active in Oct (73)')).toBeVisible();
    await page.click('text=Job Bago Spark');
    await expect(page.locator('#formulaBarInput')).toBeVisible();
  });
});
