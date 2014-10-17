/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router-component').Link;

var User = React.createClass({
  render () {
    return [
      <h1>Hello! { this.props.username }</h1>,
      <Link href="/">Back to top</Link>
    ];
  }
});
