const login = (): void => {
  cy.visit('/login');
  cy.get('[data-testid="login-button"]').should('be.visible');
  // The page is pre-rendered HTML first; wait for React to attach before interacting.
  cy.wait(1000);
  cy.get('[data-testid="email-input"]').type('jan@lendit.be');
  cy.get('[data-testid="password-input"]').type('LendIt-demo-1');
  cy.get('[data-testid="login-button"]').click();
  cy.get('[data-testid="home-title"]').should('exist');
};

describe('Supabase status', () => {
  it('shows connected with the number of profiles', () => {
    login();
    cy.get('[data-testid="nav-profile"]').click();
    cy.get('[data-testid="supabase-status"]', { timeout: 10000 }).should(
      'contain',
      'Connected (4 profiles)',
    );
  });

  it('shows not connected when the request fails', () => {
    // Matches the profiles request on any host, so it works with your project URL.
    cy.intercept({ pathname: '/rest/v1/profiles' }, { forceNetworkError: true });
    login();
    cy.get('[data-testid="nav-profile"]').click();
    cy.get('[data-testid="supabase-status"]', { timeout: 10000 }).should(
      'contain',
      'Not connected',
    );
  });
});