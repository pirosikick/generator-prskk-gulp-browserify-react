/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var Hello = require('./views/Hello');
var User = require('./views/User');

var App = React.createClass({
  render () {
    return (
      <Locations>
        <Location path="/" handler={Hello} />
        <Location path="/user/:username" handler={User} />
      </Locations>
    );
  }
});

React.renderComponent(
  <App />,
  document.body
);
