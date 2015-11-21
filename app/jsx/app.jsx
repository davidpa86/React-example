var React = require("react");
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState : function getInitialState(){
    return {
      red : 128,
      green : 128,
      blue : 128
    };
  },
  update : function update(){
    this.setState({
      red : this.refs.red.refs.sliderInput.getDOMNode().value,
      green : this.refs.green.refs.sliderInput.getDOMNode().value,
      blue : this.refs.blue.refs.sliderInput.getDOMNode().value
    });
  },
  render : function render(){
    return (
      <div>
        {this.state.red},  {this.state.green},   {this.state.blue}
        <hr/>
        <Slider ref="red" updateColor={this.update}></Slider>
        <Slider ref="green" updateColor={this.update}></Slider>
        <Slider ref="blue" updateColor={this.update}></Slider>
      </div>
    );
  }
});

var Slider = React.createClass({
  render : function render(){
    return (
      <div>
        <input ref="sliderInput" type="range" min="0" max="255" onChange={this.props.updateColor}></input>
      </div>
    );
  }
});

ReactDOM.render(<App/>,document.getElementById("container"));
