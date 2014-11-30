/** @jsx React.DOM */

var React = require('react/addons');
var Code = require('./code');

var WrapperSlide = React.createClass({
  render() {
    return (
      <div className="third-party-wrapper-slide__wrapper">
        <h1>Easily wrap third party libraries</h1>
        <Code
          className="jsx-slide__code language-javascript"
        >
          {require('raw-loader!./code')}
        </Code>
      </div>
    );
  }
});

module.exports = WrapperSlide;

