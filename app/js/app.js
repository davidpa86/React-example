var React = require("react");

var App = React.createClass({displayName: "App",
  render: function() {
    var text = "Hello, world";
    var classCSS = "exampleCss";
    return React.createElement("div", {className: classCSS}, 
      text, "!!"
    );
  }
});

var List = React.createClass({displayName: "List",
    render: function(){
      var array = ["Madrid","Barcelona","Valencia"];
      var liArray = array.map(function(city, index){
          return React.createElement("li", {key:  index }, city);
      });
      return React.createElement("ul", null, liArray);
    }
});

var Liquid = React.createClass({displayName: "Liquid",
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
    return React.createElement("div", null, 
        React.createElement("input", {type: "text", onChange: this.setTemperature, value: this.state.temperature}), 
        React.createElement("h2", null, "At temperature ", this.state.temperature, ", ", this.props.config.name, " is ", liquidState)
      );
  }
});

var LiquidList = React.createClass({displayName: "LiquidList",
  render : function (){
    var liquids = this.props.liquids.map(function(liquidObject, index){
                    return React.createElement(Liquid, {config:  liquidObject, key:  index });
                  })
    return (
        React.createElement("div", null, 
             liquids 
        )
    );
  }
});
//React.render(<App/>, document.getElementById("container"));
//React.render(<List/>, document.getElementById("container"));
var water = {
  name : "water",
  freezing: 0,
  boiling: 100
};
var ethanol = {
    name: "ethanol",
    freezing: -173.2,
    boiling: 173.1
};
var liquidsConfig = [water,ethanol];
var liquidsEl = document.createElement("div");
document.getElementById("container").appendChild(liquidsEl);
React.render(React.createElement(LiquidList, {liquids: liquidsConfig}),liquidsEl);
