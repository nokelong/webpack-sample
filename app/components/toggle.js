import React      from 'react'
import ReactDOM   from 'react-dom'
import Clock      from  './clock'
import FlavorForm from './flavorForm'

/**
 * 开关组件
 */
class Toggle extends React.Component {
    constructor(props) {
    	super(props);
    	this.state = {isToggle: true};
    	this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick() {
        this.setState((preSate) => ({
            isToggle: !preSate.isToggle
        }))
    }

    render() {
    	return (
    		<div>
    		    <Clock isToggle={this.state.isToggle} ref="stopClock"/>
                <button onClick={this.handlerClick} >
                    {this.state.isToggle ?'on': 'off'}
                </button>
                <FlavorForm />
            </div>
    	)
    }
}

module.exports = Toggle;