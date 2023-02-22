/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/');

});

it('Changing the DOM', () => {

  cy
    .get('[data-cy="star"]')
    .invoke('show') //this invoke method is used to change the DOM and make that element visible
    .click(); //then only it can be clicked

  cy
    .get('[data-cy="board-item"]')
    .trigger('mouseover');

  cy
    .get('[data-cy="star"]')
    .should('be.visible');

    cy
    .get('[data-cy="board-item"]')
    .trigger('mouseout');

  cy
    .get('[data-cy="star"]')
    .should('not.be.visible');

})