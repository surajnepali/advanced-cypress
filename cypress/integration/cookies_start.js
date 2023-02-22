/// <reference types="cypress" />

// Cypress.Cookies.defaults({
//   preserve: 'trello_token'
// }) //if we want to stay signed in in every testcase, we can use this command to preserve the cookie in support/index.js

Cypress.Cookies.preserveOnce('trello_token') //if we want to stay signed in only in this file, we can use this command

describe('Cookies', () => {

  beforeEach(() => {

    cy
      .visit('/')

  })

  it.only('test #1', () => {

    cy
      .setCookie('trello_token', '.....') //if we leave it like this, it will be shown in Application/Cookies but not actually signed in
    
    cy
      .reload() //this will reload the page and we will be signed in


    });

  it('test #2', () => {
    // Cypress.Cookies.preserveOnce('trello_token') //this line of code works up to this testcase 
  });

  it('test #3', () => {
    // To work in this testcase onward, we need to use Cypress.Cookies.preserveOnce('trello_token') in beforeEach() only for this test file
  })

});