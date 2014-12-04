# React Introduction

[React](http://facebook.github.io/react/) presentation originally given 2014-12-03 for the [Asheville Coder's League](http://avlcoders.org/). Introduces some of the concepts of React and why it may be useful.

## Installing dependencies

Clone and run `npm install` (you'll need to have [Node.js](https://nodejs.org/) installed). This will install build and browser dependencies.

## Building the presentation

First, install independencies.

### For viewing

Run `npm run deploy` to build the presentation with optimiziation. Open the included index.html file to view the presentation.

### For editing and experimenting

Run `npm start` to build the presentation with [Webpack](https://webpack.github.io/) and start the development server. You can then visit one of two URLs to view the presentation.

The [normal viewer](http://localhost:8080/built_assets_bundle) works as you'd expect, refresh manually to see changes as you've modified the code.

The [live update viewer](http://localhost:8080/webpack-dev-server/built_assets_bundle) will automatically refresh as you make changes and display the warnings/errors if you make them.
