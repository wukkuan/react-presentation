/** @jsx React.DOM */

var React = require('react/addons');
var Prism = require('../thirdparty/prism/prism');
require('../thirdparty/prism/prism.css');

var Code = React.createClass({
  mixins: [React.addons.PureRenderMixin],

  componentDidMount() {
    this._highlight();
  },

  componentDidUpdate() {
    this._highlight();
  },

  _highlight() {
    Prism.highlightElement(this.getDOMNode());
  },

  render() {
    return (
      <code className={this.props.className}>
        {this.props.children}
      </code>
    );
  }
});

module.exports = Code;
