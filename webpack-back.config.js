const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node",
  entry: {
    app: ["./src/backend.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "backend.bundle.js"
  },
  externals: [nodeExternals()],
};