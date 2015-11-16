var React = require("react");

var App = React.createClass({
  render: function() {
    var text = "Hello, world";
    return <h1>{text}!!</h1>;
    }
  });
React.render(<App/>, document.getElementById("example"));
