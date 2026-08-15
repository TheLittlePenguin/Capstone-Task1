import { test as setup, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

const authDir = path.join(__dirname, '../playwright/.auth');
const authFile = path.join(authDir, 'user.json');

setup('authenticate', async ({ page }) => {
  await fs.promises.mkdir(authDir, { recursive: true });

  await page.goto('/auth/signin');

  // Make sure .env contains a TEST_EMAIL and TEST_PASSWORD values
  await page.getByLabel('email').fill(process.env.TEST_EMAIL!);
  await page.getByLabel('password').fill(process.env.TEST_PASSWORD!);

  await page.locator('button').filter({ hasText: 'Sign in' }).click();

  await page.waitForURL('/team-page');

  await page.context().storageState({ path: authFile });
});