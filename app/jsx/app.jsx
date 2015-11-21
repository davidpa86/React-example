var React = require("react");
var ReactDOM = require('react-dom');

var Button = React.createClass({
  getInitialState : function getInitialState(){
    return {val : 0};
  },
  update : function update(){
    this.setState({val : this.state.val+1});
  },
  componentWillMount : function componentWillMount(){
    console.log("Mounting component");
  },
  componentWillUnmount : function componentWillUnmount(){
    console.log("Unmounting component");
  },
  render : function render(){
    return <button onClick={this.update}>{this.state.val}</button>
  }
});

var App = React.createClass({
  mount : function mount(){
    ReactDOM.render(<Button/>,document.getElementById("app"));
  },
  unmount : function unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById("app"));
  },
  render : function render(){
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="app"></div>
      </div>
    );
  }
});


ReactDOM.render(<App/>,document.getElementById("container"));
