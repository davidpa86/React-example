var React = require("react");
var ReactDOM = require('react-dom');
var ReactAddons = require('react-addons');

var App = React.createClass({
  mixins : [ReactAddons.LinkedStateMixin],
  getInitialState: function() {
    return {
      name : "",
      email : "",
      phone : ""
    };
  },
  render : function (){
    return (
      <form>
        <div>
          {/* with this mixin and linkstate we can have double binding, we do not use onChange and this.refs */}
          <input valueLink={this.linkState("name")} type="text" placeholder="name"/>
          <label>**{this.state.name}</label>
        </div>
        <div>
          <input valueLink={this.linkState("email")} type="text" placeholder="email"/>
          <label>**{this.state.email}</label>
        </div>
        <div>
          <input valueLink={this.linkState("phone")} type="text" placeholder="phone"/>
          <label>**{this.state.phone}</label>
        </div>
      </form>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById("container"));
