// Built pelo Lucas Pereira

const path = require('path')

module.exports = {
   entry: './client/src/App.js',
   output: {
      path: path.join(__dirname, 'client/public'),
      filename: 'bundle.js'
   },
   mode: 'development',
   module: {
      rules: [{
         loader: 'babel-loader',
         test: /\.jsx?$/,
         exclude: /node_modules/
      }]
   },
   devtool: 'cheap-module-aval-source-map',
   devServer: {
      contentBase: path.join(__dirname, 'client/public'),
      historyApiFallback: true
   }
}
