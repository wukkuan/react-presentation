/** @jsx React.DOM */

var React = require('react/addons');

var Slides = require('./slides');
var TextSlide = require('./text-slide');
var JsxSlide = require('./jsx-slide');
var WrapperSlide = require('./wrapper-slide');
var ComponentSlide = require('./component-slide');

var App = React.createClass({
  render() {
    return (
      <Slides
        slides={
          [{
            component: TextSlide,
            props: {
              text: 'React',
              subTexts: []
            }
          }, {
            component: TextSlide,
            props: {
              text: 'William Blasko',
              subTexts: [
                'Web Application Developer',
                'williamblasko@gmail.com',
                '@wukkuan'
              ]
            }
          }, {
            component: TextSlide,
            props: {
              text: 'JavaScript web app component library',
              subTexts: []
            }
          }, {
            component: TextSlide,
            props: {
              text: 'A component is a building block for your application',
              subTexts: [
                'Possibly re-usable, but not necessarily',
              ]
            }
          }, {
            component: ComponentSlide,
            props: { },
            takesFocus: true
          }, {
            component: TextSlide,
            props: {
              text: 'Not a framework like Ember, Angular',
              subTexts: ['Just components (view layer)']
            }
          }, {
            component: JsxSlide,
            props: {}
          }, {
            component: TextSlide,
            props: {
              text: 'Two types of data',
              subTexts: ['properties (props)', 'state']
            }
          }, {
            component: TextSlide,
            props: {
              text: 'Properties',
              subTexts: ['Passed in when instantiating', 'Immutable']
            }
          }, {
            component: TextSlide,
            props: {
              text: 'State',
              subTexts: ['Internal to component', 'Use conservatively']
            }
          }, {
            component: TextSlide,
            props: {
              text: 'Stateless Component',
              subTexts: ['Pure \'function\'', 'Wrap stateless components with stateful components']
            }
          }, {
            component: TextSlide,
            props: {
              text: 'Virtual DOM',
              subTexts: [
                'React.render(<App props={data}/>, document.body)',
                'DOM modification is expensive',
                'Freely re-render your entire scene'
              ]
            }
          }, {
            component: TextSlide,
            props: {
              text: 'Isomorphic JS',
              subTexts: [
                'Same code to render on client or server',
                'View page with JS disabled',
                'See the page before the JS has loaded',
                'Search engine crawlers'
              ]
            }
          }, {
            component: WrapperSlide,
            props: {}
          }]
        }
      />
    );
  }
});

module.exports = App;
