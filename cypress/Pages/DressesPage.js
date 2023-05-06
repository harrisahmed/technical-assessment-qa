class DressesPage {
  navigate() {
    cy.visit(Cypress.config('baseUrl'))
    cy.get("amp-img[alt='Clothing']").click()
    cy.get("img[alt='Dresses']").click()
  }

  sortPriceDescending() {
     cy.get('li[data-vars-lb="Price"]').eq(0)
     .should('be.visible');
    cy.visit('https://iprice.my/clothing/dresses/?sort=price.net_desc')
  }

  getPrices() {
    let prices = []
    cy.get('div.db.gW').each(($el) => {
      const title = $el.text();
      prices.push(parseFloat(title.replace(/[^\d.-]/g, '')));
    }).then(() => {

      const filteredArr = prices.filter(num => num !== 149.9);
      let isDescending = true;
      for (let i = 1; i < filteredArr.length; i++) {
        if (filteredArr[i] > filteredArr[i - 1]) {
          isDescending = false;
          break;
        }
      }
      expect(isDescending).to.be.true;
    });
  }
}

export default new DressesPage();
