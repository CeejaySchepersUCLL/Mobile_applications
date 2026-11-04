describe('Home screen', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('[data-testid="login-button"]').should('be.visible');
    // The page is pre-rendered HTML first; wait for React to attach before interacting.
    cy.wait(1000);
    cy.get('[data-testid="email-input"]').type('demo@lendit.be');
    cy.get('[data-testid="password-input"]').type('LendIt-demo-1');
    cy.get('[data-testid="login-button"]').click();
    cy.get('[data-testid="home-title"]').should('exist');
  });

  it('shows the listings by default', () => {
    cy.get('[data-testid="listing-card-listing-1"]').should('exist');
    cy.get('[data-testid^="listing-card-"]').should('have.length', 4);
    cy.get('[data-testid^="request-card-"]').should('not.exist');
  });

  it('switches to the community requests and back', () => {
    cy.get('[data-testid="home-toggle-requests"]').click();
    cy.get('[data-testid="request-card-request-1"]').should('exist');
    cy.get('[data-testid^="request-card-"]').should('have.length', 3);
    cy.get('[data-testid^="listing-card-"]').should('not.exist');

    cy.get('[data-testid="home-toggle-listings"]').click();
    cy.get('[data-testid^="listing-card-"]').should('have.length', 4);
  });

  it('shows an "I have this" button on every request', () => {
    cy.get('[data-testid="home-toggle-requests"]').click();
    cy.get('[data-testid="have-this-request-1"]').should('exist');
  });
});