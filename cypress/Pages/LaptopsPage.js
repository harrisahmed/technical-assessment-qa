class LaptopsPage {
    navigate() {
        cy.visit(Cypress.config('baseUrl'))
        cy.get("img[alt='Computing']").click()
        cy.get("img[alt='Laptops']").click()
    }
    selectBrand(brandName) {
        cy.get('span').invoke('css', 'pointer-events', 'auto')
            .contains('Brands').eq(0)
            .click()
        cy.get(`span[data-vars-lb='${brandName}']`)
            .eq(0).should('be.visible');
        cy.visit(Cypress.config('baseUrl') + '/dell/computing/laptops/?show-filter=1')

    }
    getResults() {
        cy.get('div.l- > h3.uo').each(($el) => {
            const title = $el.text();
            expect(title).to.match(/dell/i);
        });
    }
}

export default new LaptopsPage();
