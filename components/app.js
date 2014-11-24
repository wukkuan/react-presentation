/** @jsx React.DOM */

var React = require('react/addons');

var Slides = require('./slides');
var TextSlide = require('./text-slide');

var App = React.createClass({
  render() {
    return (
      <Slides
        slides={
          [{
            component: TextSlide,
            data: {
              text: 'React',
              subTexts: []
            }
          }, {
            component: TextSlide,
            data: {
              text: 'William Blasko',
              subTexts: [
                'Web Application Developer',
                'williamblasko@gmail.com',
                '@wukkuan'
              ]
            }
          }]
        }
      />
    );
  }
});

module.exports = App;
