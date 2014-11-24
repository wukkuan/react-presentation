/** @jsx React.DOM */

var React = require('react/addons');

require('../styles/text-slide.css');

var TextSlide = React.createClass({
  render() {
    var data = this.props.data;
    var text = data.text;
    var subTexts = data.subTexts.map(function(subText, idx) {
      return (
        <div
          className="text-slide__sub-text"
          key={idx}
        >
          {{subText}}
        </div>
      );
    });

    return (
      <div className="text-slide__wrapper">
        <div className="text-slide__text">
          {{text}}
        </div>
        {subTexts}
      </div>
    );
  }
});

module.exports = TextSlide;
