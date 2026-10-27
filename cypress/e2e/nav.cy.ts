describe('Login screen', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('[data-testid="login-button"]').should('be.visible');
    cy.wait(1000);
    cy.get('[data-testid="email-input"]').type('demo@lendit.be');
    cy.get('[data-testid="password-input"]').type('LendIt-demo-1');
    cy.get('[data-testid="login-button"]').click();
    cy.get('[data-testid="bottom-nav"]').should('exist');
  });

  it('goes to Create and Profile and back to Home', () => {
    cy.get('[data-testid="nav-create"]').click();
    cy.get('[data-testid="create-title"]').should('exist');

    cy.get('[data-testid="nav-profile"]').click();
    cy.get('[data-testid="profile-title"]').should('exist');

    cy.get('[data-testid="nav-home"]').click();
    cy.get('[data-testid="bottom-nav"]').should('exist');
  });

  it('logs out from the profile page', () => {
    cy.get('[data-testid="nav-profile"]').click();
    cy.get('[data-testid="logout-button"]').click();
    cy.get('[data-testid="login-button"]').should('exist');
  });
});