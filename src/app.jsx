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

//React.render(<App/>, document.getElementById("container"));
React.render(<List/>, document.getElementById("container"));
