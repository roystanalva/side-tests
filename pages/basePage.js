class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    try {
      await this.page.goto(url, { 
        waitUntil: 'domcontentloaded', 
        timeout: 120000 
      });
      // Wait for body to ensure page is rendered
      await this.page.waitForSelector('body', { timeout: 30000 });
      // Wait for any lazy-loaded content
      await this.page.waitForTimeout(2000);
    } catch (e) {
      console.log(`Navigation warning: ${e.message}`);
      // Page might still be usable
    }
  }

  async getTitle() {
    return await this.page.title();
  }

  async getUrl() {
    return this.page.url();
  }

  async click(locator) {
    await this.page.click(locator);
  }

  async fill(locator, text) {
    await this.page.fill(locator, text);
  }

  async waitForSelector(locator, options = {}) {
    await this.page.waitForSelector(locator, options);
  }

  async isVisible(locator) {
    return await this.page.isVisible(locator);
  }

  async getText(locator) {
    return await this.page.textContent(locator);
  }

  async getAllLinks() {
    return await this.page.$$eval('a', anchors => anchors.map(a => a.href));
  }

  async checkBrokenLinks() {
    const links = await this.getAllLinks();
    const brokenLinks = [];
    for (const link of links) {
      try {
        const response = await this.page.request.get(link);
        if (response.status() >= 400) {
          brokenLinks.push({ url: link, status: response.status() });
        }
      } catch (e) {
        brokenLinks.push({ url: link, error: e.message });
      }
    }
    return brokenLinks;
  }
}

module.exports = BasePage;
