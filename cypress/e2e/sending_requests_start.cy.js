/// <reference types="cypress" />

// beforeEach(() => {
//   cy
//     .request('POST', '/api/reset')
// });

it('Sending requests', () => {

  cy
    .visit('/')

  cy
    .request({
      method: 'POST',
      url: '/api/boards',
      body: {
        name: 'board created by Suraj'
      }

    })
  
  // cy
  //   .request({
  //     method: 'PATCH',
  //     url: '/api/boards/59989738518',
  //     body: {
  //       name: 'board again updated by Suraj'
  //     }
  //   })

  // cy
  //   .request({
  //     method: 'DELETE',
  //     url: '/api/boards/59989738518'
  //   })

});