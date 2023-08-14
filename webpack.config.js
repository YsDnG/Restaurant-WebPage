const path = require('path');

module.exports = {
  entry: './src/pages/home/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool:'source-map',
// module.exports = {
//   entry: './src/pages/contact/contact.js', // Utilisez le chemin vers contact.js
//   output: {
//     filename: 'main.js', // Utilisez un nom de fichier différent
//     path: path.resolve(__dirname, 'dist'),
//   },
//   devtool: 'inline-source-map', // Utilisez les source maps en ligne
  module:{
    rules:[
      {
        test:/\.css$/i,
        use:['style-loader','css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
};