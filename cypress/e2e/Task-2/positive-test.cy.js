const Ajv=require('ajv')
const ajv=new Ajv()
import { makeApiRequest } from '../../support/api';

describe('CreateBooking API Postive tests', () => {
    let singleBookingDetail;
    let multipleBookingDetail = [];
    let multipleBookingRes = [];

    before(() => {
        cy.fixture('bookingDetail.json').then((data) => {
            multipleBookingDetail = data.bookingDetail;
        });
      });

      it('Create a new booking and validate schema', () => {    
        makeApiRequest(multipleBookingDetail[0]).then(response => {
          const schema = {
            "type": "object",
            "properties": {
              "bookingid": {
                "type": "number"
              },
              "booking": {
                "type": "object",
                "properties": {
                  "firstname": {
                    "type": "string"
                  },
                  "lastname": {
                    "type": "string"
                  },
                  "totalprice": {
                    "type": "number"
                  },
                  "depositpaid": {
                    "type": "boolean"
                  },
                  "bookingdates": {
                    "type": "object",
                    "properties": {
                      "checkin": {
                        "type": "string"
                      },
                      "checkout": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "checkin",
                      "checkout"
                    ]
                  },
                  "additionalneeds": {
                    "type": "string"
                  }
                },
                "required": [
                  "firstname",
                  "lastname",
                  "totalprice",
                  "depositpaid",
                  "bookingdates",
                  "additionalneeds"
                ]
              }
            },
            "required": [
              "bookingid",
              "booking"
            ]
          }
          const validate = ajv.compile(schema)
          const isvalid = validate(response.body)
          expect(isvalid).to.be.true
        });
      });
  
    it('Create a new booking and verify status success status, Headers', () => {
        makeApiRequest(multipleBookingDetail[0]).then(response => {
        expect(response.status).to.eq(200);
        expect(response.headers['content-type']).contain('application/json');
        expect(response.statusText).to.eq("OK");
        expect(response.body.bookingid).to.not.be.null;
        singleBookingDetail = response.body
      });
    });
  
    it("Verify the respnse of newly created booking.", () => {
          expect(singleBookingDetail.booking.firstname).to.eq('Jim');
          expect(singleBookingDetail.booking.lastname).to.eq('Brown');
          expect(singleBookingDetail.booking.totalprice).to.eq(11);
          expect(singleBookingDetail.booking.depositpaid).to.eq(true);
          expect(singleBookingDetail.booking.bookingdates.checkin).to.eq('2018-01-01');
          expect(singleBookingDetail.booking.bookingdates.checkout).to.eq('2019-01-01');
          expect(singleBookingDetail.booking.additionalneeds).to.eq('Breakfast');
    });

    it("Creates a Multiple booking with data driven approach (DDT)", () => {
        for (let i = 0; i < multipleBookingDetail.length; i++) {
            makeApiRequest(multipleBookingDetail[i]).then((response) => {
                expect(response.status).to.eq(200);
                multipleBookingRes.push(response.body.booking);
            })
        }
    });

    it("Verify the result of Multiple booking.", () => {
        expect(multipleBookingDetail).to.deep.equal(multipleBookingRes);
    });
  });
