const path = require('path');

module.exports = {
  entry: './src/pages/index/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
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