module.exports = {
  entry: "./scripts/app.js",
  output: {
    path: './build',
    filename: "bundle.js"
  },
  module: {
  loaders: [
    // {
    //   test: /\.js?$/,
    //   exclude: /(node_modules|bower_components)/,
    //   loader: 'babel'
    // },
    // {
    //   test: /\.css$/,
    //   loader: "style!css"
    // }
  ]}
}
