var React = require("react");
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState : function getInitialState(){
    return {
      red : 0,
      blue : 0
    };
  },
  update : function update(){
    this.setState({
      red :  ReactDOM.findDOMNode(this.refs.red.refs.sliderInput).value,
      blue :  ReactDOM.findDOMNode(this.refs.blue.refs.sliderInput).value
    });
  },
  render : function render(){
    return (
      <div>
        <NumInput
                  ref="red"
                  min={0}
                  max={255}
                  step={1}
                  val={this.state.red}
                  label="Red"
                  updateColor={this.update}/>
        {/*Build another one with different params*/}
        <NumInput
                  ref="blue"
                  min={0}
                  max={255}
                  step={0.01}
                  val={this.state.blue}
                  label="Blue"
                  type = "number"
                  updateColor={this.update}/>
      </div>
    );
  }
});

var NumInput = React.createClass({
  propTypes : {
    min : React.PropTypes.number,
    max : React.PropTypes.number,
    step : React.PropTypes.number,
    val : React.PropTypes.number,
    label : React.PropTypes.string,
    update : React.PropTypes.func.isRequired,
    type : React.PropTypes.oneOf(["number","range"])
  },
  getDefaultProps : function (){
    return {
      min : 0,
      max : 0,
      step : 1,
      val : 0,
      label : "",
      type : "range"
    };
  },
  render : function render(){
    var label = this.props.label !== ""?
    <label>{this.props.label} {this.props.val} </label>: "";
    return (
      <div>
        <input
                ref="sliderInput"
                type={this.props.type}
                min={this.props.min}
                max={this.props.max}
                step={this.props.step}
                defaultValue={this.props.val}
                onChange={this.props.updateColor}/>
        {label}
      </div>
    );
  }
});

ReactDOM.render(<App/>,document.getElementById("container"));
