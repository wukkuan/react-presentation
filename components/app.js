/** @jsx React.DOM */

var React = require('react/addons');

var Slides = require('./slides');
var TextSlide = require('./text-slide');
var JsxSlide = require('./jsx-slide');

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
          }, {
            component: TextSlide,
            data: {
              text: 'JavaScript web app component library',
              subTexts: []
            }
          }, {
            component: TextSlide,
            data: {
              text: 'A component is a building block for your application',
              subTexts: [
                'Possibly re-usable, but not necessarily',
                'Everything is a component in a React application!'
              ]
            }
          }, {
            component: TextSlide,
            data: {
              text: 'Not a framework like Ember, Angular',
              subTexts: ['Just components (view layer)']
            }
          }, {
            component: JsxSlide,
            data: {
            }
          }, {
            component: TextSlide,
            data: {
              text: 'Each component in React has a render method that returns a JSX node',
              subTexts: []
            }
          }, {
            component: TextSlide,
            data: {
              text: 'Isomorphic JavaScript',
              subTexts: ['http://www.slideshare.net/rmsguhan/react-meetup-mailonreact']
            }
          }]
        }
      />
    );
  }
});

module.exports = App;
