/** @jsx React.DOM */

if (console && console.log) {
  console.log('starting...');
}

var React = require('react');
var App = require('./components/app');

require('./styles/normalize.css');
require('./styles/global-util.css');

React.render(<App/>, document.body);

