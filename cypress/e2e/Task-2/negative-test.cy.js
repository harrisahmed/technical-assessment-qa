import { makeApiRequest } from '../../support/api';

describe('CreateBooking endpoint', () => {
    // 4xx Client error – the request contains the wrong syntax would be more appropriate message 
    // but to demonstrate negative test cases execution proceding with 500.  
    it('should return 500 when firstname is missing', () => {
        const requestBody = {
            lastname: 'Test',
            totalprice: 100,
            depositpaid: true,
            bookingdates: {
                checkin: '2022-06-01',
                checkout: '2022-06-05'
            },
            additionalneeds: 'Breakfast'
        };
        makeApiRequest(requestBody).then((response) => {
            expect(response.status).to.eq(500);
            expect(response.body).to.eq('Internal Server Error')
        });
    });

    // 4xx Client error – the request contains the wrong syntax would be more appropriate message 
    // but to demonstrate negative test cases execution proceding with 500.  
    it('should return 500 when lastname is missing', () => {
        const requestBody = {
            firstname: 'Test',
            totalprice: 100,
            depositpaid: true,
            bookingdates: {
                checkin: '2022-06-01',
                checkout: '2022-06-05'
            },
            additionalneeds: 'Breakfast'
        };
        makeApiRequest(requestBody).then((response) => {
            expect(response.status).to.eq(500);
            expect(response.body).to.eq('Internal Server Error')
        });
    });

    // 4xx Client error – the request contains the wrong syntax would be more appropriate message 
    // but to demonstrate negative test cases execution proceding with 500.  
    it('should return 500 when checkin and checkout date are wrong', () => {
        const requestBody = {
            firstname: 'Test',
            lastname: 'User',
            totalprice: 100,
            depositpaid: true,
            bookingdates: {
                checkout: '2022-06-05'
            },
            additionalneeds: 'Breakfast'
        };
        makeApiRequest(requestBody).then((response) => {
            expect(response.status).to.eq(500);
            expect(response.body).to.eq('Internal Server Error')
        });
    });

    // 4xx Client error – the request contains the wrong syntax would be more appropriate message 
    // but to demonstrate negative test cases execution proceding with 500.  
    it('should return 500 Not Found when we try to wrong data type in input feilds', () => {
        const requestBody = {
            firstname: 123,
            lastname: 'User',
            totalprice: "100",
            depositpaid: true,
            bookingdates: {
                checkout: '2022-06-05'
            },
            additionalneeds: "$$"
        };
        makeApiRequest(requestBody).then((response) => {
            expect(response.status).to.eq(500);
            expect(response.body).to.eq('Internal Server Error')
        });
    });

    it('should return 404 Not Found when we try to add maniuplate endpoint path', () => {
        const requestBody = {
            firstname: 'Test',
            lastname: 'User',
            totalprice: 100,
            depositpaid: true,
            bookingdates: {
                checkin: '2022-06-01',
                checkout: '2022-06-05'
            },
            additionalneeds: 'Breakfast'
        };
        cy.request({
            method: 'POST',
            url: Cypress.config('endPoint')+'/booking/asap',
            body: requestBody,
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.eq('Not Found');
        });
    });

    it('should return 500 Not Found when we try tochange headers', () => {
        const requestBody = {
            firstname: 'Test',
            lastname: 'User',
            totalprice: 100,
            depositpaid: true,
            bookingdates: {
                checkin: '2022-06-05',
                checkout: '2024-06-03'
            },
            additionalneeds: 'Breakfast'
        };
        cy.request({
            method: 'POST',
            url: Cypress.config('endPoint'),
            body: requestBody,
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'xyz',
                'Accept': 'abc',

            }
        }).then((response) => {
            expect(response.status).to.eq(500);
        });
    });

})



