import { test, expect } from '@playwright/test';

test('homepage sa načíta a zobrazí nadpis', async ({ page }) => {
  await page.goto('/sk');

  await expect(page.getByRole('heading', { name: 'Kto som?' })).toBeVisible();
});

test('homepage zobrazí tlačidlo na stiahnutie CV', async ({ page }) => {
  await page.goto('/sk');

  const downloadButton = page.getByRole('link', { name: /Stiahnuť CV/i });
  await expect(downloadButton).toBeVisible();
});

test('homepage zobrazí sekcie about karty', async ({ page }) => {
  await page.goto('/sk');

  await expect(page.getByRole('heading', { name: 'Moja cesta' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Motivácia' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Vizie' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Hobby' })).toBeVisible();
});

test('homepage zobrazí sidebar so skillsetom', async ({ page }) => {
  await page.goto('/sk');

  await expect(page.getByText('Skillset')).toBeVisible();
});
