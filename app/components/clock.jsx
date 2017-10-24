import React from    'react'
import ReactDOM from 'react-dom'

/**
 * 定时器组件
 */
class Clock extends React.Component {
	constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.stopTick = this.stopTick.bind(this);
        this.startTick = this.startTick.bind(this);
	}
    componentDidMount() {
        console.log("this props isToggle:"+this.props.isToggle);
        this.startTick();
    }
    componentWillMount() {

    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps:' +nextProps.isToggle )
        if(!nextProps.isToggle) {
            this.stopTick();
        } else {
            this.startTick()
        }
    }
    componentWillUnmount() {       
        this.stopTick()
    }
    startTick() {
        this.timeID = setInterval(() =>this.tick(),1000);
    }
    stopTick() {
        console.log("timeID:"+this.timeID) 
        clearInterval(this.timeID);
    }
    tick() {
    	this.setState({
    	    date: new Date()
    	})
    }
	render() {
		return (			   
			<text>现在是北京时间： {this.state.date.toLocaleTimeString()}</text>
		)
	}
}

module.exports = Clock;