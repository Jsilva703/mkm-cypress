const path = require('path');

module.exports = {
  entry: './src/index.js', // Arquivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Diretório de saída
    filename: 'bundle.js' // Nome do arquivo de saída
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Regra para arquivos JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // Utiliza o Babel para transpilar o JavaScript
        }
      }
    ]
  }
};
