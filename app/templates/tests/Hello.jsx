/* @jsx React.DOM */

var assert = require('chai').assert;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Hello = React.createClass({
  render () {
    return <div>Hello! {this.props.name}</div>;
  }
})

describe('Hello has "pirosikick" as name', function () {
  it('has "Hello! pirosikick"', function () {

    var hello = TestUtils.renderIntoDocument(
      <Hello name="pirosikick" />
    );

    assert.equal(hello.getDOMNode().textContent, 'Hello! pirosikick');
  })
});
