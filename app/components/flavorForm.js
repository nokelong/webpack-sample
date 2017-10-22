import React from    'react'
import ReactDOM from 'react-dom'

/**
 * 表单组件
 */
class FlavorForm extends React.Component {
    constructor(props) {
    	super(props)
    	this.state = {
    		uname: '',
    		city: 'beijing'
    	}
    	this.handleUnameChange = this.handleUnameChange.bind(this);
    	this.handleCityChange  = this.handleCityChange.bind(this);
    	this.handleSubmit      = this.handleSubmit.bind(this);
    }
    handleUnameChange(event) {
        this.setState({
            uname: event.target.value
        });
    }

    handleCityChange(event) {
    	this.setState({
            city: event.target.value
    	});
    }

    handleSubmit(event) {
        console.log('uname：' + this.state.uname + ', 所在城市：' + this.state.city)
        event.preventDefault();
    }

    render() {
    	return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    name：<input value={this.state.uname} onChange={this.handleUnameChange}/>
                </label><br/>
                <label>
                    所在的城市：
                    <select value={this.state.city} onChange={this.handleCityChange}>
                        <option value="beijing">beijing</option>
                        <option value="shanghai">shanghai</option>
                        <option value="guangzhou">guangzhou</option>
                        <option value="shenzhen">shenzhen</option>
                    </select>
                </label><br/>
                <input type="submit" value="Submit" style={{position: 'absolute',left: '100px'}} />
            </form>
    	);
    }
}

module.exports = FlavorForm;