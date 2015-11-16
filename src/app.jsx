var React = require("react");

var App = React.createClass({
  render: function() {
    var text = "Hello, world";
    var classCSS = "exampleCss";
    return <div className = {classCSS}>
      {text}!!
    </div>;
  }
});

var List = React.createClass({
    render: function(){
      var array = ["Madrid","Barcelona","Valencia"];
      var liArray = array.map(function(city, index){
          return <li key={ index }>{city}</li>;
      });
      return <ul>{liArray}</ul>;
    }
});

var Water = React.createClass({
  getInitialState : function () {
    return {
      temperature : 20
    };
  },
  setTemperature : function (event){
    this.setState({temperature: event.target.value});
  },
  render : function (){
    var waterState;
    if (this.state.temperature <= 0)
    {
        waterState = "solid";
    }
    else if (this.state.temperature >= 100)
    {
      waterState = "gas";
    }
    else {
      waterState = "liquid";
    }
    return <div>
        <input type="text" onChange={this.setTemperature} value={this.state.temperature}/>
        <h2>At temperature {this.state.temperature}, water is {waterState}</h2>
      </div>;
  }
});

//React.render(<App/>, document.getElementById("container"));
//React.render(<List/>, document.getElementById("container"));
React.render(<Water/>, document.getElementById("container"));
