const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {

    target: "web",
    mode: "development",

    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

     devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // pasta onde está seu index.html
    },
    port: 3000, 
    open: true, // abre no navegador automaticamente
    liveReload: true,
   
  },

  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "index.html"),
    favicon: path.resolve(__dirname, "src", "assets", "favicon-dog.svg")
  }),

new CopyPlugin({
    patterns: [{
        from: path.resolve(__dirname, "src", "assets"),
        to: path.resolve(__dirname, "dist", "assets"),
    }]
})],

   module: {
    rules: [
      {
        test: /\.css$/, // ou scss, etc.
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          }
        }
      }
    ]
  }
};