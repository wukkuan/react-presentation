/** @jsx React.DOM */

var React = require('react/addons');

require('../styles/component-slide.css');

var TextSlide = React.createClass({
  getInitialState() {
    return {
      slideIndex: 0
    };
  },

  componentDidMount() {
    this.getDOMNode().focus();
  },

  componentDidUpdate() {
    this.getDOMNode().focus();
  },

  render() {
    var props = this.props;

    var slideIndex = this.state.slideIndex;

    var cx = React.addons.classSet;
    var classes = {
      login: cx({
        'component-login-header-example__wrapper': true,
        active: slideIndex === 1
      }),
      header: cx({
        'component-header-example__wrapper': true,
        active: slideIndex === 2
      }),
      body: cx({
        'component-body-example__wrapper': true,
        active: slideIndex === 3
      }),
      footer: cx({
        'component-footer-example__wrapper': true,
        active: slideIndex === 4
      }),
      app: cx({
        'component-app-example__wrapper': true,
        active: slideIndex === 5
      })
    };

    return (
      <div
        className="component-slide__wrapper"
        tabIndex="0"
        onKeyUp={this.handleKeyUp}
      >
        <h1>Component Breakdown</h1>
        <div className={classes.app}>
          <header className={classes.header}>
            <h1>Title Of App</h1>
            <div className={classes.login}>
              Login: <input type="text" />
              Password: <input type="password" />
              <button>Login</button>
            </div>
          </header>
          <section className={classes.body}>
            <h2>Welcome to my site</h2>
            <p>Here is some content.</p>
            <p>Here is some content.</p>
            <p>Here is some content.</p>
            <p>Here is some content.</p>
          </section>
          <footer className={classes.footer}>
            Copyright, etc
          </footer>
        </div>
      </div>
    );
  },

  handleKeyUp(event) {
    var slideIndex;

    if (event.keyCode === 39) {
      slideIndex = this.state.slideIndex;
      if (slideIndex < 5) {
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
});

module.exports = TextSlide;
