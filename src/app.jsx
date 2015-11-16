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

var Liquid = React.createClass({
  getInitialState : function () {
    return {
      temperature : 20
    };
  },
  setTemperature : function (event){
    this.setState({temperature: event.target.value});
  },
  render : function (){
    var liquidState;
    if (this.state.temperature <= this.props.config.freezing)
    {
        liquidState = "solid";
    }
    else if (this.state.temperature >= this.props.config.boiling)
    {
      liquidState = "gas";
    }
    else {
      liquidState = "liquid";
    }
    return <div>
        <input type="text" onChange={this.setTemperature} value={this.state.temperature}/>
        <h2>At temperature {this.state.temperature}, {this.props.config.name} is {liquidState}</h2>
      </div>;
  }
});

//React.render(<App/>, document.getElementById("container"));
//React.render(<List/>, document.getElementById("container"));
var water = {
  name : "water",
  freezing: 0,
  boiling: 100
};
var waterEl = document.createElement("div");
document.getElementById("container").appendChild(waterEl);
React.render(<Liquid config={water}/>, waterEl);

var ethanol = {
    name: "ethanol",
    freezing: -173.2,
    boiling: 173.1
};
var ethanolEl = document.createElement("div");
document.getElementById("container").appendChild(ethanolEl);
React.render(<Liquid config={ethanol}/>, ethanolEl);
