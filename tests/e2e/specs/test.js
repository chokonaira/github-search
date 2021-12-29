// https://docs.cypress.io/api/introduction/api.html

describe('Repositories Page', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('span', 'We couldn’t find any repositories');
  });
});
