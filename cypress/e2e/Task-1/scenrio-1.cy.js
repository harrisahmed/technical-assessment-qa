import LaptopsPage from '../../Pages/LaptopsPage';

describe('Scenario 1', () => {
  it('Users are able to filter for an item by brand under the Computing > Laptop section', () => {
    const brandName = 'Dell';
    LaptopsPage.navigate()
    LaptopsPage.selectBrand(brandName)
    LaptopsPage.getResults()  
  })
})

