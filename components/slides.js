/** @jsx React.DOM */

var React = require('react/addons');

require('../styles/slides.css');

var Slides = React.createClass({
  getInitialState: function() {
    return {
      slideIndex: 0
    };
  },

  componentDidMount() {
    this.getDOMNode().focus();
  },

  render() {
    var slide = this.props.slides[this.state.slideIndex];
    var slideComp = (
      <slide.component data={slide.data} />
    );

    var cx = React.addons.classSet;
    var className = cx({
      'slides__wrapper': true,
      'blurred': !this.state.hasFocus
    });

    return (
      <div
        className={className}
        tabIndex="0"
        onKeyUp={this.handleKeyUp}
      >
        {slideComp}
      </div>
    );
  },

  handleKeyUp(event) {
    var slideIndex;

    if (event.altKey) {
      if (event.keyCode === 39) {
        slideIndex = this.state.slideIndex;
        if (slideIndex < this.props.slides.length - 1) {
          this.setState({ slideIndex: slideIndex + 1 });
        }
      } else if (event.keyCode === 37) {
        slideIndex = this.state.slideIndex;
        if (slideIndex > 0) {
          this.setState({ slideIndex: slideIndex - 1 });
        }
      }
    }
  }
});

module.exports = Slides;
