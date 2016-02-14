require("babel-register")({
  ignore: "./node_modules"
});
// require('babel-polyfill');

const app = require('./app');
app.run();
