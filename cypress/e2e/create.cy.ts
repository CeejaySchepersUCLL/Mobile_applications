describe('Create screen', () => {
  beforeEach(() => {
    cy.visit('/login');
    cy.get('[data-testid="login-button"]').should('be.visible');
    // The page is pre-rendered HTML first; wait for React to attach before interacting.
    cy.wait(1000);
    cy.get('[data-testid="email-input"]').type('demo@lendit.be');
    cy.get('[data-testid="password-input"]').type('LendIt-demo-1');
    cy.get('[data-testid="login-button"]').click();
    cy.get('[data-testid="home-title"]').should('exist');
    cy.get('[data-testid="nav-create"]').click();
    cy.get('[data-testid="create-title"]').should('exist');
  });

  it('shows the listing form by default', () => {
    cy.get('[data-testid="create-toggle-listing"]').should('exist');
    cy.get('[data-testid="create-toggle-request"]').should('exist');
    cy.get('[data-testid="listing-title-input"]').should('exist');
    cy.get('[data-testid="listing-description-input"]').should('exist');
    cy.get('[data-testid^="create-category-"]').should('have.length', 4);
    cy.get('[data-testid="request-title-input"]').should('not.exist');
  });

  it('shows an error under each empty field of the listing form', () => {
    cy.get('[data-testid="create-submit-listing"]').click();
    cy.get('[data-testid="listing-title-input-error"]').should('exist');
    cy.get('[data-testid="listing-description-input-error"]').should('exist');
  });

  it('switches to the request form', () => {
    cy.get('[data-testid="create-toggle-request"]').click();
    cy.get('[data-testid="request-title-input"]').should('exist');
    cy.get('[data-testid="request-start-input"]').should('exist');
    cy.get('[data-testid="request-end-input"]').should('exist');
    cy.get('[data-testid="request-description-input"]').should('exist');
    cy.get('[data-testid="listing-title-input"]').should('not.exist');
  });

  it('shows an error under each required empty field of the request form', () => {
    cy.get('[data-testid="create-toggle-request"]').click();
    cy.get('[data-testid="create-submit-request"]').click();
    cy.get('[data-testid="request-title-input-error"]').should('exist');
    cy.get('[data-testid="request-start-input-error"]').should('exist');
    cy.get('[data-testid="request-end-input-error"]').should('exist');
    cy.get('[data-testid="request-description-input-error"]').should('not.exist');
  });
});