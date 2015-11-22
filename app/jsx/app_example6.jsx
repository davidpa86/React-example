var React = require("react");
var ReactDOM = require('react-dom');

var ReactMixin = {
  getInitialState : function (){
    return {
      count : 0
    };
  },
  componentWillMount : function componentWillMount(){
    console.log("Component will mount...");
  },
  incrementCount : function (){
    this.setState({count : this.state.count+1});
  }
};

var Button = React.createClass({
  mixins : [ReactMixin],
  render : function (){
    return <button onClick={this.incrementCount}>{this.props.txt} - {this.state.count}</button>
  }
});

var Label = React.createClass({
  mixins : [ReactMixin],
  componentWillMount : function(){
    setInterval(this.incrementCount, 1000);
  },
  render : function (){
    return <label>{this.props.txt} - {this.state.count}</label>
  }
});

var App = React.createClass({
  render : function (){
    return (
      <div>
        <Button txt="This is a button"/>
        <br />
        <Label txt="This is a label"/>
      </div>
    );
  }
});


ReactDOM.render(<App/>,document.getElementById("container"));
