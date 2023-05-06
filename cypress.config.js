const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://iprice.my',
    endPoint: 'https://restful-booker.herokuapp.com/booking'
  },
  viewportWidth: 1050,
  viewportHeight: 650,
});
