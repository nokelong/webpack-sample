var React = require('react');
var ReactDOM = require('react-dom');
// var text = require('../build/text.json');
import text from './text.json';
import style from './hello.css'

var IndexCtr = React.createClass({
    render: function() {
	    return (
            <div className={style.root}>
            {text.name}
            </div>
        )
    }
});

module.exports = IndexCtr