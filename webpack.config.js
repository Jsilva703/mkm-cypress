const webpack = require("@cypress/webpack-preprocessor");

module.exports = (on) => {
  const options = {
    webpackOptions: require("../../webpack.config.js"), // Certifique-se de que o caminho para o arquivo webpack está correto
    watchOptions: {},
  };

  on("file:preprocessor", webpack(options));
};
