import HomePage from '../../Pages/HomePage';

describe('Scenario 3', () => {
    it('Users are able to filter for an item by brand under the Computing > Laptop section', () => {
      
     HomePage.navigate()
     HomePage.getSearchBox().type('iPhone 14');
     HomePage.getSearchButton()

     HomePage.validateResult().each(($el, index, $list) => {
        const title = $el.text();
        expect(title).contain('iPhone 14')
      });  
    })
})