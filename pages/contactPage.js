const BasePage = require('./basePage');

class ContactPage extends BasePage {
  constructor(page) {
    super(page);
    this.nameInput = 'input[name*="name"], input[placeholder*="name"], #name';
    this.emailInput = 'input[name*="email"], input[type="email"], #email';
    this.messageInput = 'textarea[name*="message"], textarea[placeholder*="message"], #message';
    this.submitButton = 'button[type="submit"], button:has-text("Submit"), button:has-text("Send")';
    this.successMessage = '.success, [class*="success"], :has-text("Thank you")';
    this.errorMessage = '.error, [class*="error"], [role="alert"]';
  }

  async fillContactForm(name, email, message) {
    if (name) await this.fill(this.nameInput, name);
    if (email) await this.fill(this.emailInput, email);
    if (message) await this.fill(this.messageInput, message);
  }

  async submitForm() {
    await this.click(this.submitButton);
  }

  async getErrorMessage() {
    return await this.getText(this.errorMessage);
  }

  async isSuccessMessageVisible() {
    return await this.isVisible(this.successMessage);
  }
}

module.exports = ContactPage;
