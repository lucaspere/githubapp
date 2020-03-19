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
      }, {
         test: /\.css$/,
         use: [
            'style-loader',
            'css-loader'
         ]
      }
   ]
   },
   devtool: 'cheap-module-aval-source-map',
   devServer: {
      open: true,
      port: 5000,
      contentBase: path.join(__dirname, 'client/public'),
      historyApiFallback: true
   }
}
