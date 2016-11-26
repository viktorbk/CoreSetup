var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    target: "web",
    entry: {
        'main': "./TS/Main.ts"
    },
    output: {
        path: __dirname + "/wwwroot",
        filename: "/js/[name].js"
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".ts", ".less"]
    },
    module: {
        loaders: [
          { test: /\.ts/, exclude: [/node_modules/, /typings/], loader: "ts-loader" },
          { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
	      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000&name=/css/[hash].[ext]' }
        ]
    },
    plugins: [
      new ExtractTextPlugin("/css/site.css", { allChunks: true }),
      new CopyWebpackPlugin([
       { from: 'node_modules/jquery/dist', to: './lib/jquery/dist' },
       { from: 'node_modules/bootstrap/dist', to: './lib/bootstrap/dist' },
       { from: 'node_modules/devextreme/dist/js', to: './lib/devextreme/js' },
       { from: 'node_modules/devextreme/dist/css', to: './lib/devextreme/css' }
      ])
    ]
}