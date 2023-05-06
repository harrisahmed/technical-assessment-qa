import DressesPage from '../../Pages/DressesPage';

describe('Scenario 2', () => {
  it('should sort dresses by price in descending order', () => {
    DressesPage.navigate();
    DressesPage.sortPriceDescending();
    DressesPage.getPrices()  
});})
