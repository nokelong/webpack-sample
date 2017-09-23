// const hello = require('./Hello');
// document.querySelector('#root').appendChild(hello());

var React = require('react');
var ReactDOM = require('react-dom');

import IndexCtr from './index'
import './main.css'

ReactDOM.render(
  <IndexCtr/>,
  document.querySelector('#root')
);

