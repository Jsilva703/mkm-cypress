const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jp8ghz",
  e2e: {
    setupNodeEvents(on, config) {
      // Configuração do cypress-mochawesome-reporter
      require("cypress-mochawesome-reporter/plugin")(on);

      // Task para capturar e logar informações
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });

      // Outras configurações de plugins
      return require("./cypress/plugins/index.js")(on, config);
    },

    baseUrl: "https://beta.mkom.tec.br/",
    requestTimeout: 10000,
    defaultCommandTimeout: 25000,
    connectTimeout: 35000,

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
