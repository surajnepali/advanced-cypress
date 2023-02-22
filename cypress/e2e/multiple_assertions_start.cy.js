/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/2305140181')
})

it('Multiple assertions', () => {

  cy
    .get('[data-cy=task]')
    .eq(0)
    .should('contain.text', 'bread')

  cy
    .get('[data-cy=task]')
    .eq(1)
    .should('contain.text', 'milk')

})

it('Multiple assertions 2', () => {

  cy
    .get('[data-cy=task]')
    .should( item => {
      if (item.length !== 3) {
        throw new Error('Not enough elements!')
      }
      expect(item[0]).to.contain.text('bread')
      expect(item[1]).to.contain.text('milk')
    })

})