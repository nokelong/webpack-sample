import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component {
	constructor(props) {
        super(props);
        this.state = {date: new Date()};
	}
    componentDidMount() {
        this.timeID = setInterval(()=>this.tick(), 1000);
    }
    componentWillMount() {

    }
    componentWillUnmount() {
        clearInterval(this.timeID);
    }
    tick() {
    	this.setState({
    	    date: new Date()
    	})
    }
	render() {
		return (
			<div>
			     <h1>Hello, React!</h1>
			     <h2>现在是北京时间： {this.state.date.toLocaleTimeString()}</h2>
			</div>
		)
	}
}

module.exports = Clock;