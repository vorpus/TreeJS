const path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    bundle: "./lib/main.js",
    spec: "./spec/treeSpecs.js"
    },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
  },
  externals: {
    "jquery": "jQuery"
  },
  devtool: 'source-maps',
};
