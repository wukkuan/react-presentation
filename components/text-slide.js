/** @jsx React.DOM */

var React = require('react/addons');

require('../styles/text-slide.css');

var TextSlide = React.createClass({
  render() {
    var props = this.props;
    var text = props.text;
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
