const React = require('react');
const ReactDOM = require('react-dom');



const RouteStaticMap = React.createClass({


  displayRoute () {
    return(this.props.routePath);
  },

  render () {

    return(
      <div className="map-thumb">
        <img width="125" src={'http://maps.googleapis.com/maps/api/staticmap?size=125x125&path=enc:' + this.displayRoute()  + '?key=AIzaSyAqkde8F_7eSorbQZNzN6oVQkvrAHiZCZo' } alt="Run Route Map" />
      </div>
    );}

});

module.exports = RouteStaticMap;
