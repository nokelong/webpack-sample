// const hello = require('./Hello');
// document.querySelector('#root').appendChild(hello());

var React = require('react');
var ReactDOM = require('react-dom');
var IndexCtr = require('./index');

ReactDOM.render(
  <IndexCtr/>,
  document.querySelector('#root')
);

