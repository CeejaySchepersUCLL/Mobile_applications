describe('Profile screen', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('[data-testid="login-button"]').should('be.visible');
    // The page is pre-rendered HTML first; wait for React to attach before interacting.
    cy.wait(1000);
    cy.get('[data-testid="email-input"]').type('jan@lendit.be');
    cy.get('[data-testid="password-input"]').type('LendIt-demo-1');
    cy.get('[data-testid="login-button"]').click();
    cy.get('[data-testid="home-title"]').should('exist');
    cy.get('[data-testid="nav-profile"]').click();
    cy.get('[data-testid="profile-title"]').should('exist');
  });

  it('shows the name and email of the logged-in user', () => {
    cy.get('[data-testid="profile-name"]').should('contain', 'Jan Claes');
    cy.get('[data-testid="profile-email"]').should('contain', 'jan@lendit.be');
  });

  it('logs out and returns to the login page', () => {
    cy.get('[data-testid="logout-button"]').click();
    cy.get('[data-testid="login-button"]').should('exist');
    cy.get('[data-testid="bottom-nav"]').should('not.exist');
  });

  it('stays logged in after a reload', () => {
    cy.reload();
    cy.get('[data-testid="profile-title"]').should('exist');
    cy.get('[data-testid="profile-name"]').should('contain', 'Jan Claes');
  });

  it('stays logged out after logging out', () => {
    cy.get('[data-testid="logout-button"]').click();
    cy.get('[data-testid="login-button"]').should('exist');
    cy.visit('/profile');
    cy.get('[data-testid="login-button"]').should('exist');
  });
});