var React = require("react");
var ReactDOM = require('react-dom');

var Button = React.createClass({
  getInitialState : function (){
    return {increasing : false};
  },
  update : function update(){
    this.setProps({val : this.props.val+1});
  },
  componentWillReceiveProps : function (nextProps){
    this.setState({increasing : nextProps.val > this.props.val});
  },
  shouldComponentUpdate : function (nextProps, nextState) {
    console.log("nextProps ", nextProps);
    console.log("nextState ", nextState);
    return nextProps.val % 5 === 0; //update only every 5 clicks
  },
  componentDidUpdate : function (nextProps, prevState){
    console.log("next prop ",nextProps);
    console.log("prev state ",prevState);
  },
  render : function render(){
    console.log(this.state.increasing);
    return <button onClick={this.update}>{this.props.val}</button>
  }
});


ReactDOM.render(<Button val={0}/>,document.getElementById("container"));
