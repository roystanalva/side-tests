const BasePage = require('./basePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://side.inc';
    this.careerLink = 'a[href*="career"]';
    this.aboutLink = 'a[href*="about"]';
    this.contactLink = 'a:has-text("CONTACT"), a[href*="contact"]';
    this.servicesLink = 'a:has-text("SERVICES")';
    this.navigationMenu = 'nav, header, [class*="nav"], [class*="menu"]';
    this.footerLinks = 'footer a';
    this.logo = 'img, a[class*="logo"], [class*="brand"]';
    this.buttons = 'button, a[role="button"]';
    this.images = 'img';
    this.heroSection = 'section, [class*="hero"], [class*="banner"], main';
  }

  async open() {
    await this.navigate(this.url);
    await this.page.waitForLoadState('networkidle', { timeout: 30000 });
  }

  async clickCareer() {
    await this.click(this.careerLink);
  }

  async clickAbout() {
    await this.click(this.aboutLink);
  }

  async clickContact() {
    await this.click(this.contactLink);
  }

  async clickLogin() {
    await this.click(this.loginLink);
  }

  async isHeroVisible() {
    return await this.isVisible(this.heroSection);
  }

  async getNavigationLinks() {
    return await this.page.$$eval('a', links => 
      links.map(a => ({ text: a.textContent.trim(), href: a.href }))
        .filter(l => l.text && l.href)
    );
  }

  async getFooterLinks() {
    return await this.page.$$eval(this.footerLinks, links => links.map(a => a.href));
  }
}

module.exports = HomePage;
