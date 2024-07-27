const { defineConfig } = require("cypress");

const cypressSplit = require("cypress-split");

module.exports = defineConfig({
  projectId: "jp8ghz",
  e2e: {
    setupNodeEvents(on, config) {
      // Configuração do cypress-mochawesome-reporter
      require("cypress-mochawesome-reporter/plugin")(on);

      // Outras configurações de plugins
      return require("./cypress/plugins/index.js")(on, config);
    },
    requestTimeout: 10000,
    defaultCommandTimeout: 25000,
    connectTimeout: 35000,
    //baseUrl: "http://dockerhost", // Atualize aqui com o endereço IP correto

    // Renomeie integrationFolder para specPattern

    setupNodeEvents(on, config) {
      cypressSplit(on, config);
      // IMPORTANT: return the config object
      return config;
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
    video: true, // Garante que a gravação de vídeo está ativada
  },
});
