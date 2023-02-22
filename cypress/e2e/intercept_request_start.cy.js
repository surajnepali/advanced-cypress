/// <reference types="cypress" />

// it('Intercept requests', () => {

//   cy.intercept({
//     method: 'GET',
//     url: '/api/boards',
//   }).as('boardList')

//   cy
//     .visit('/')

//   cy
//     .wait('@boardList')
//     .its('response.statusCode')
//     .should('eq', 200)

//   cy
//     .get('[data-cy=board-item]')
//     .should('have.length', 1)

// });

it('Intercept requests', () => {

  cy.intercept({
    method: 'POST',
    url: '/api/boards',
  }).as('addInBoard')

  cy
    .visit('/')
  
  cy
    .get('[data-cy=create-board]')
    .click()
  
  cy
    .get('[data-cy=new-board-input]')
    .type('board created by Suraj{enter}')

  cy
    .wait('@addInBoard')
    .then((interception) => {
      expect(interception.response.statusCode).to.eq(201)
      expect(interception.response.body.name).to.eq('board created by Suraj')
    })

});