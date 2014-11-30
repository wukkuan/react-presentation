/** @jsx React.DOM */

var React = require('react/addons');
var Code = require('./code');
require('../styles/jsx-slide.css');
require('../thirdparty/prism/prism.css');

var JsxSlide = React.createClass({
  render() {
    return (
      <div className="jsx-slide__wrapper">
        <h1>JSX</h1>
        <Code
          className="jsx-slide__code language-javascript"
        >
          {require('raw-loader!../code-examples/jsx.js.example')}
        </Code>
      </div>
    );
  }
});

module.exports = JsxSlide;
