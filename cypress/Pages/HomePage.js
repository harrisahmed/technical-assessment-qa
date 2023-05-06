class HomePage {
    navigate() {
        cy.visit(Cypress.config('baseUrl'))
        
    }
    getSearchBox() {
        return cy.get('#term');
      }
    
      getSearchButton() {
        return cy.get('#search-btn').click();
      }

      validateResult(){
       return cy.get('.kB h3');
      }


}

export default new HomePage();
