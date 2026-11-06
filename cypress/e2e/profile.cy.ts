describe('Profile screen', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('[data-testid="login-button"]').should('be.visible');
    // The page is pre-rendered HTML first; wait for React to attach before interacting.
    cy.wait(1000);
    cy.get('[data-testid="email-input"]').type('demo@lendit.be');
    cy.get('[data-testid="password-input"]').type('LendIt-demo-1');
    cy.get('[data-testid="login-button"]').click();
    cy.get('[data-testid="home-title"]').should('exist');
    cy.get('[data-testid="nav-profile"]').click();
    cy.get('[data-testid="profile-title"]').should('exist');
  });

  it('shows the name and email of the logged-in user', () => {
    cy.get('[data-testid="profile-name"]').should('contain', 'Demo Student');
    cy.get('[data-testid="profile-email"]').should('contain', 'demo@lendit.be');
  });

  it('logs out and returns to the login page', () => {
    cy.get('[data-testid="logout-button"]').click();
    cy.get('[data-testid="login-button"]').should('exist');
    cy.get('[data-testid="bottom-nav"]').should('not.exist');
  });
});