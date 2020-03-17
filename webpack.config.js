// Built pelo Lucas Pereira

const path = require('path')

module.exports = {
   entry: './src/App.js',
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
   },
   mode: 'development',
   module: {
      rules: [{
         loader: 'babel-loader',
         test: /\.jsx?$/,
         exclude: /node_modules/
      }, {
         test: /\.s?css$/,
         use: [
            'style-loader',
            'css-loader',
            'sass-loader'
         ]
      }]
   },
   devtool: 'cheap-module-aval-source-map',
   devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
   }
}
