const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configuração do cypress-mochawesome-reporter
      require('cypress-mochawesome-reporter/plugin')(on);
      
      // Outras configurações de plugins
      return require('./cypress/plugins/index.js')(on, config);
    },
    requestTimeout: 10000,
    defaultCommandTimeout: 25000,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    }
  },
});
