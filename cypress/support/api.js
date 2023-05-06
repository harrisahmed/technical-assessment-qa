export const makeApiRequest = (requestBody) => {
    return cy.request({
      method: 'POST',
      url: Cypress.config('endPoint'),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: requestBody
    });
  }
  