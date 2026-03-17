import { test, expect } from '@playwright/test';

test('používateľ môže odoslať kontaktný formulár', async ({ page }) => {
  // 1. Prejdi na tvoju lokálnu adresu (Next.js beží na 3000)
  await page.goto('/sk/contact');

  // 2. Nájdi polia formulára a vyplň ich
  // Tip: MUI TextFieldy majú label, Playwright ich vie nájsť podľa neho
  await page.getByRole('textbox', { name: /meno/i }).fill('Janko Hraško');
  await page.getByRole('textbox', { name: /správa/i }).fill('Ahoj, toto je testovacia správa pre moje CV!');

  // 3. Klikni na tlačidlo Odoslať odkaz
  await page.getByRole('button', { name: /odoslať odkaz/i }).click();

  // 4. Over, či sa zobrazila úspešná správa
  const successMessage = page.getByText('Odkaz bol úspešne odoslaný!');
  await expect(successMessage).toBeVisible();
});
