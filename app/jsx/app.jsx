var React = require("react");
var ReactDOM = require('react-dom');
var d3 = require("d3");
var angular = require("angular");

var App = React.createClass({
  componentWillReceiveProps: function(nextProps) {
    if (nextProps.data) {this.renderChart(nextProps.data);}
  },
  renderChart: function(dataset) {
    /**d3.select("#" + this.props.target).selectAll("div").data(dataset).enter().append("div").attr("class", "bar").style("height", function(d) {
      return d.val * 5 + "px";
    });*/
    dataset.map(function (item){
      var div = document.createElement("div");
      div.innerHTML = item.val;
      document.getElementById("rchart").appendChild(div);
    });
  },
  render: function() {
    return React.DOM.div({id: this.props.target})
  }
});

angular.module("RNG", []).controller("chartController", [
  "$http",
  "$scope",
  function($http, $scope) {
    $http.jsonp("http://filltext.com/?rows=10&val={randomNumber}&callback=JSON_CALLBACK").success(function(d) {
      $scope.data = d;
    })
  }
]).directive("reactchart", function() {
  return {
    restrict: "E",
    scope: {
      data: "=",
      id : "@"
    },
    link: function(scope, elm, attrs) {
      scope.$watch("data", function(n, o) {
        ReactDOM.render(<App data = {scope.data} target = {scope.id}/>, elm[0])
      })
    }
  }
});
