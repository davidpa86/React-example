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
React.render(<App/>, document.body);
