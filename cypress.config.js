const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "szjnx4",
  e2e: {
    baseUrl: 'https://automationpratice.com.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
