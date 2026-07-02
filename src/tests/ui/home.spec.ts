import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('homepage loads with heading', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.open();

  await expect(homePage.heading).toBeVisible();
});
