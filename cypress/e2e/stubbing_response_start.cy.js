/// <reference types="cypress" />

// it('Stubbing response', () => {

//   cy
//     .intercept({
//       method: 'GET',
//       url: '/api/boards'
//     },{
//       // this returns empty board instead of the actual board
//     }).as('boardList')

//   cy
//     .visit('/')

// });

// it('Stubbing response', () => {

//   // To check the system runs correctly if there is network error
//   cy
//     .intercept({
//       method: 'POST',
//       url: '/api/boards'
//     },{
//       forceNetworkError: true
//     }).as('createBoard')

//   cy
//     .visit('/')

//   cy
//     .get('[data-cy=create-board]')
//     .click()

//   cy
//     .get('[data-cy=new-board-input]')
//     .type('board created by Suraj{enter}')

//   cy
//     .get('#errorMessage')
//     .should('be.visible')
//     .and('contain.text', 'There was an error creating board')

// });

it('Stubbing response', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }, (req) => {

      req.reply( (res) => {
        res.body[0].starred = true

        return res
      })
    }).as('boardList')

  cy
    .visit('/')


});