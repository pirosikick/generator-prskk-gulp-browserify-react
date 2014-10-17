/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router-component').Link;

var Hello = React.createClass({
  render () {
    return [
      <h1>Hello! Hello!</h1>,
      <Link href="/user/prosikick">Go to Pirosikick</Link>
    ];
  }
});

module.exports = Hello;
