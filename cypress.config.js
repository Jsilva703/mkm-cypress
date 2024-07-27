const { defineConfig } = require("cypress");
const cypressSplit = require("cypress-split");

module.exports = defineConfig({
  projectId: "jp8ghz",
  e2e: {
    setupNodeEvents(on, config) {
      // Configuração do cypress-mochawesome-reporter
      require("cypress-mochawesome-reporter/plugin")(on);

      // Configuração do cypress-split
      cypressSplit(on, config);

      // Outras configurações de plugins
      const additionalConfig = require("./cypress/plugins/index.js")(
        on,
        config
      );

      // IMPORTANT: return the config object
      return { ...config, ...additionalConfig };
    },
    requestTimeout: 10000,
    defaultCommandTimeout: 25000,
    connectTimeout: 35000,
    // baseUrl: "http://dockerhost", // Atualize aqui com o endereço IP correto
    specPattern: "cypress/integration/**/*.spec.js", // Atualize o padrão de especificação conforme necessário
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
