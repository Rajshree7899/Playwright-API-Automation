import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h1');
  }

  async open() {
    await this.page.goto('/');
  }

  async getHeadingText() {
    return this.heading.textContent();
  }
}
