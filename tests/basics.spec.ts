import { test, expect } from '@playwright/test';

test('Login redirect team-page', async ({ page }) => {
  await page.goto('/auth/signin');
  await page.waitForURL('/team-page');
});

test('Check required content exists and visible', async ({ page }) => {
  await page.goto('/auth/signin');
  await page.waitForURL('/team-page');

  const memberCards = page.getByTestId('membercard');
  const memberImgs = page.getByTestId('memberimg');
  const memberBlurbs = page.getByTestId('memberblurb');

  const numMembers = 5
  await expect(memberCards).toHaveCount(numMembers);
  await expect(memberImgs).toHaveCount(numMembers);
  await expect(memberBlurbs).toHaveCount(numMembers);
});

