module.exports = {
  entry: [
    //'webpack/hot/only-dev-server',
    './scripts/app.js'],
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  module: {
  loaders: [
    {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      //loader: 'babel'
      loader: 'react-hot!babel'
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    }
  ]}
}
