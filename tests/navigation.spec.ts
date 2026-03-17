import { test, expect } from '@playwright/test';

test('navigácia obsahuje správne linky', async ({ page }) => {
  await page.goto('/sk');

  await expect(page.getByRole('link', { name: 'O mne' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Projekty' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Kontakt' })).toBeVisible();
});

test('navigácia na stránku projektov funguje', async ({ page }) => {
  await page.goto('/sk');

  await page.getByRole('link', { name: 'Projekty' }).click();

  await expect(page).toHaveURL(/\/sk\/projects/);
  await expect(
    page.getByRole('heading', { name: 'Moje Projekty' }),
  ).toBeVisible();
});

test('navigácia na kontaktnú stránku funguje', async ({ page }) => {
  await page.goto('/sk');

  await page.getByRole('link', { name: 'Kontakt' }).click();

  await expect(page).toHaveURL(/\/sk\/contact/);
  await expect(page.getByRole('heading', { name: 'Kontakt' })).toBeVisible();
});

test('prepnutie jazyka na angličtinu funguje', async ({ page }) => {
  await page.goto('/sk');

  // Nájdi prepínač jazyka a prepni na EN
  await page.getByRole('button', { name: 'EN', exact: true }).click();

  await expect(page).toHaveURL(/\/en/);
});

// Responzívny dizajn
test('na mobile sa zobrazí hamburger menu ikonka', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/sk');

  await expect(page.getByRole('button', { name: /menu/i })).toBeVisible();
});

test('na mobile sa desktop linky skryjú', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/sk');

  await expect(page.getByRole('link', { name: 'Projekty' })).toBeHidden();
});

test('na mobile sa po kliknutí na hamburger otvorí drawer', async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/sk');

  await page.getByRole('button', { name: /menu/i }).click();

  await expect(page.getByText('Menu')).toBeVisible();
  await expect(page.getByRole('link', { name: /o mne/i })).toBeVisible();
});

test('na desktope je hamburger menu skryté', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/sk');

  await expect(page.getByRole('button', { name: /menu/i })).toBeHidden();
});
