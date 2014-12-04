/** @jsx React.DOM */

var React = require('react/addons');

require('../styles/text-slide.css');

var TextSlide = React.createClass({
  getInitialState() {
    return {
      slideIndex: 0
    };
  },

  getDefaultProps() {
    return {
      stepThroughSubTexts: false
    };
  },

  componentDidMount() {
    if (this.props.stepThroughSubTexts) {
      this.getDOMNode().focus();
    }
  },

  componentDidUpdate() {
    if (this.props.stepThroughSubTexts) {
      this.getDOMNode().focus();
    }
  },

  render() {
    var props = this.props;
    var text = props.text;

    var subTextsToDisplay;
    if (this.props.stepThroughSubTexts) {
     subTextsToDisplay = props.subTexts.slice(0, this.state.slideIndex);
    } else {
      subTextsToDisplay = props.subTexts;
    }

    var subTexts = subTextsToDisplay.map(function(subText, idx) {
      return (
        <li
          className="text-slide__sub-text"
          key={idx}
        >
          {{subText}}
        </li>
      );
    });

    return (
      <div
        className="text-slide__wrapper"
        tabIndex={this.props.stepThroughSubTexts ? "0" : null}
        onKeyUp={this.handleKeyUp}
      >
        <div className="text-slide__text">
          {{text}}
        </div>
        <ul className="text-slide__sub-texts">
          {subTexts}
        </ul>
      </div>
    );
  },

  handleKeyUp(event) {
    var slideIndex;

    if (this.props.stepThroughSubTexts) {
      if (event.keyCode === 39) {
        slideIndex = this.state.slideIndex;
        if (slideIndex < this.props.subTexts.length) {
          event.stopPropagation();
          this.setState({ slideIndex: slideIndex + 1 });
        }
      } else if (event.keyCode === 37) {
        slideIndex = this.state.slideIndex;
        if (slideIndex > 0) {
          event.stopPropagation();
          this.setState({ slideIndex: slideIndex - 1 });
        }
      }
    }
  }
});

module.exports = TextSlide;
