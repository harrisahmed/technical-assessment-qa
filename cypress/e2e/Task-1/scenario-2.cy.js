import DressesPage from '../../Pages/DressesPage';

describe('Dresses page', () => {
  it('should sort dresses by price in descending order', () => {
    let prices = []  

    DressesPage.navigate();
    DressesPage.sortPriceDescending();
    DressesPage.getPrices().then((prices) => {
        expect(prices).to.equal(prices.sort((a, b) => b - a))
    })
});})
