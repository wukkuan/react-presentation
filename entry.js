/** @jsx React.DOM */

var React = require('react');
var App = require('./components/app');

require('./styles/normalize.css');
require('./styles/global-util.css');

React.render(<App/>, document.body);

