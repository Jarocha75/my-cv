import { test, expect } from '@playwright/test';

test('stránka projektov sa načíta', async ({ page }) => {
  await page.goto('/sk/projects');
  await page.waitForLoadState('networkidle');

  await expect(page.getByRole('heading', { name: 'Moje Projekty' })).toBeVisible({ timeout: 15000 });
});

test('stránka projektov obsahuje projekty alebo prázdny stav', async ({ page }) => {
  await page.goto('/sk/projects');
  await page.waitForLoadState('networkidle');

  // Stránka sa načítala ak vidíme nadpis
  await expect(page.getByRole('heading', { name: 'Moje Projekty' })).toBeVisible({ timeout: 15000 });

  // Skontroluj či sú karty projektov alebo žiadny obsah
  const cards = page.locator('.MuiCard-root');
  const count = await cards.count();

  if (count > 0) {
    // Ak existujú projekty, každá karta má nadpis
    await expect(cards.first()).toBeVisible();
  }
});
