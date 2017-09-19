var React = require('react');
var ReactDOM = require('react-dom');
var text = require('../build/text.json');

var IndexCtr = React.createClass({
    render: function() {
	    return (
            <div>
            {text.name}
            </div>
        )
    }
});

module.exports = IndexCtr