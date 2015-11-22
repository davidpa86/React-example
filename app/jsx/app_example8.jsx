var React = require("react");
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState: function() {
    return {
      data: [
        {
          name: 'Delirium Red',
          alcohol: 8.5,
          country: 'BE'
        }, {
          name: 'Delirium Tremens',
          alcohol: 8.5,
          country: 'BE'
        }, {
          name: 'De Graal Quest',
          alcohol: 9,
          country: 'BE'
        }, {
          name: 'De Graal Gember',
          alcohol: 8,
          country: 'BE'
        }, {
          name: 'De Graal Tripel',
          alcohol: 9,
          country: 'BE'
        }, {
          name: 'De Verboden Vrucht',
          alcohol: 8.5,
          country: 'BE'
        }, {
          name: 'Diabolici',
          alcohol: 8,
          country: 'BE'
        }, {
          name: 'Dolle Brouwers Extra Stout',
          alcohol: 9,
          country: 'BE'
        }, {
          name: 'Dominus Triple',
          alcohol: 8,
          country: 'BE'
        }, {
          name: 'Drie Fonteinen Oude Geuze',
          alcohol: 6,
          country: 'BE'
        }, {
          name: 'Dulle Teve',
          alcohol: 10,
          country: 'BE'
        }, {
          name: 'Duvel',
          alcohol: 8.5,
          country: 'BE'
        }, {
          name: 'Duvel Triple Hop',
          alcohol: 9.5,
          country: 'BE'
        }, {
          name: 'Ename Tripel',
          alcohol: 8.5,
          country: 'BE'
        }, {
          name: 'Floris Apple',
          alcohol: 3.6,
          country: 'BE'
        }, {
          name: 'Floris Chocolate',
          alcohol: 4.2,
          country: 'BE'
        }, {
          name: 'Floris Fraise',
          alcohol: 3.6,
          country: 'BE'
        }, {
          name: 'Floris Honey',
          alcohol: 4.5,
          country: 'BE'
        }, {
          name: 'Floris Mango',
          alcohol: 3.6,
          country: 'BE'
        }, {
          name: 'Floris Ninkeberry',
          alcohol: 3.6,
          country: 'BE'
        }, {
          name: 'Gauloise Brune',
          alcohol: 8.1,
          country: 'BE'
        }, {
          name: 'Gauloise Fruits Rouge',
          alcohol: 8.2,
          country: 'BE'
        }, {
          name: 'Gordon Finest Gold',
          alcohol: 10,
          country: 'BE'
        }, {
          name: 'Gordon Finest Platinum',
          alcohol: 12,
          country: 'BE'
        }, {
          name: 'Gordon Finest Red',
          alcohol: 8.4,
          country: 'BE'
        }
      ]
    };
  },
  render : function (){
    var rows = this.state.data.map(function(beer,i){
      return <BeerRow data={beer} key={i}></BeerRow>
    });
    return <table><tbody>{rows}</tbody></table>
  }
});

var BeerRow = React.createClass({
  render : function (){
    return (
      <tr>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.alcohol}</td>
        <td>{this.props.data.country}</td>
      </tr>
    );
  }
});

ReactDOM.render(
  <App/>, document.getElementById("container"));
