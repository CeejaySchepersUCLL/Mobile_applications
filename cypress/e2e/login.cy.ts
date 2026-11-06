describe('Login screen', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('[data-testid="login-button"]').should('be.visible');
    // The page is pre-rendered HTML first; wait for React to attach before interacting.
    cy.wait(1000);
  });

  it('renders the login form', () => {
    cy.get('[data-testid="email-input"]').should('exist');
    cy.get('[data-testid="password-input"]').should('exist');
    cy.get('[data-testid="login-button"]').should('exist');
    cy.get('[data-testid="app-logo"]').should('be.visible');
  });

  it('shows an error under each empty field', () => {
    cy.get('[data-testid="login-button"]').click();
    cy.get('[data-testid="email-input-error"]').should('exist');
    cy.get('[data-testid="password-input-error"]').should('exist');
  });

  it('shows an error for wrong credentials', () => {
    cy.get('[data-testid="email-input"]').type('demo@lendit.be');
    cy.get('[data-testid="password-input"]').type('wrong-password');
    cy.get('[data-testid="login-button"]').click();
    cy.get('[data-testid="password-input-error"]').should('exist');
  });

  it('logs in with valid credentials and navigates to home', () => {
    // Replace with your Supabase test credentials before running this test
    const testEmail = 'demo@lendit.be';
    const testPassword = 'LendIt-demo-1';

    cy.get('[data-testid="email-input"]').type(testEmail);
    cy.get('[data-testid="password-input"]').type(testPassword);
    cy.get('[data-testid="login-button"]').click();
    cy.get('[data-testid="bottom-nav"]').should('exist');
  });
});
