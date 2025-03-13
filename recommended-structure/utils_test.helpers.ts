/**
 * Helper utility functions for test automation
 */
import { Page } from '@playwright/test';

/**
 * Wait for a specified amount of time (use sparingly, prefer auto-waiting)
 * @param ms Milliseconds to wait
 */
export async function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generate a random string for test data
 * @param length Length of the string
 * @returns Random string
 */
export function generateRandomString(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Get current date in YYYY-MM-DD format
 * @returns Date string
 */
export function getCurrentDate(): string {
  const date = new Date();
  return date.toISOString().split('T')[0];
}

/**
 * Scroll element into view and take screenshot
 * @param page Playwright page
 * @param selector Element selector
 * @param screenshotName Screenshot file name
 */
export async function screenshotElement(page: Page, selector: string, screenshotName: string): Promise<void> {
  const element = page.locator(selector);
  await element.scrollIntoViewIfNeeded();
  await element.screenshot({ path: `./screenshots/${screenshotName}.png` });
}