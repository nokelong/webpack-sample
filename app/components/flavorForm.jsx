import React       from  'react'
import ReactDOM    from  'react-dom'
import Calculator  from  './calculator'

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
    	// this.handleUnameChange = this.handleUnameChange.bind(this);
    	// this.handleCityChange  = this.handleCityChange.bind(this);
    	this.handleSubmit      = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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
    
    //统一输入Change处理
    handleInputChange(event) {

        const target = event.target;
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        // console.log('uname：' + this.state.uname + ', 所在城市：' + this.state.city)
        alert('uname：' + this.state.uname + ', 所在城市：' + this.state.city);
        event.preventDefault();
    }

    render() {
    	return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>username：</label>
                    <input value={this.state.uname} onChange={this.handleInputChange} name="uname"/>
                </div>              
                <div>
                    <label>所在城市：</label>
                    <select value={this.state.city} onChange={this.handleInputChange} name="city">
                        <option value="beijing">beijing</option>
                        <option value="shanghai">shanghai</option>
                        <option value="guangzhou">guangzhou</option>
                        <option value="shenzhen">shenzhen</option>
                    </select>
                </div>
                <div>
                  <input type="submit" value="Submit" style={{marginLeft: '70px',marginTop: '10px'}} />
                </div>
                <hr/>
                <Calculator />
            </form>
    	);
    }
}

module.exports = FlavorForm;