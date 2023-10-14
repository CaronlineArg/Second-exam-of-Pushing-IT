const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    'baseUrl': "http://pushing-front.vercel.app"
 
  },
  env:{
    username: "pushingit",
    password: "123456!"
  }
  
});
