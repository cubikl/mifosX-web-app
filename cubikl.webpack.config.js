const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
console.log('hello nigga')
module.exports = {
  plugins: [
    new NodePolyfillPlugin(),
  ]
};
