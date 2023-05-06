class DressesPage {
    navigate() {
      cy.visit(Cypress.config('baseUrl'))
      cy.get("amp-img[alt='Clothing']").click() 
      cy.get("img[alt='Dresses']") .click()
    }
  
    sortPriceDescending() {
        //  cy.get('li[data-vars-lb="Price"]').eq(0)
        //  .click().should('be.visible');
         cy.visit('https://iprice.my/clothing/?sort=price.net_desc')
    }
  
    // getPrices(prices) {
     
    //     cy.get('div.db.gW').each(($el) => {
    //         const title = $el.text();
    //         prices = parseFloat(title.replace(/[^\d.-]/g, '')); 
            
    //     });
    // }

    getPrices() {
        return cy.get('div.db.gW').each(($el) => {
                    let prices =[]
                    const title = $el.text();
                    prices = parseFloat(title.replace(/[^\d.-]/g, '')); 
                    const filteredPrices = prices.filter((price) => price !== 149);
                    return filteredPrices;
                    
                });
        //   .invoke('text')
        //   .then((titles) => {
        //     const prices = titles.map((title) => parseFloat(title.replace(/[^\d.-]/g, '')));
        //     const filteredPrices = prices.filter((price) => price !== 149);
        //     return filteredPrices;
        //   });
      }

    checkSorting(prices){
        cy.log('Harris')
        cy.log(prices)

    }
  }
  
  export default new DressesPage();
  