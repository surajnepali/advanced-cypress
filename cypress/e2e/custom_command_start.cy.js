/// <reference types="cypress" />

beforeEach(() => {
  cy.request('POST', '/api/reset')
})

Cypress.Commands.add('take', (boardName) => {
  cy
    .get(`[data-cy=${boardName}]`)
})

it('Custom commands', () => {

  cy
    .visit('/');

  // cy
  //   .addBoard('Very New Board');

  cy
    .take('create-board')

});