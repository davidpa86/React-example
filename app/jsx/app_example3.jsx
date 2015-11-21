var React = require("react");
var ReactDOM = require('react-dom');

var App = React.createClass({
  render : function render(){
    return (
      <Button>React <BoldText/></Button>
    );
  }
});

var BoldText = React.createClass({
  render : function render(){
    return (
      <b>JAJA</b>
    );
  }
});

var Button = React.createClass({
  render : function render(){
    return (
      <button>{this.props.children}</button>
    );
  }
});

ReactDOM.render(<App/>,document.getElementById("container"));
