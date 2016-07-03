const React = require('react');
const Link = require('react-router').Link;


const RouteForm = React.createClass({


  render () {

    return(
      <div>
        <h3>Route Points</h3>
        {this.props.mapPoints.map((point) => {
          return (<ul><li>lat: {point.lat}</li><li>lng: {point.lng}</li></ul>);
        })}
      </div>    );

  }

});

module.exports = RouteForm;
//
// <div>
//   <h3>Route Points</h3>
//   {this.props.mapPoints.map((point) => {
//     return (<ul><li>lat: {point.lat}</li><li>lng: {point.lng}</li></ul>);
//   })}
// </div>
