const React = require('react');
const ReactDOM = require('react-dom');


const RouteStaticMap = React.createClass({


  displayRoute () {
    return(this.props.routePath);
  },

  mapSize () {
    if (this.props.mapSize) {
      return this.props.mapSize;
    } else {
      return "125";
    }
  },

  render () {


    return(
      <div className="map-thumb">
        <img width={ this.mapSize() } src={'https://maps.googleapis.com/maps/api/staticmap?size=125x125&path=enc:' + this.displayRoute()  + '&key=AIzaSyAqkde8F_7eSorbQZNzN6oVQkvrAHiZCZo' } alt="Run Route Map" />

      </div>
    );}

});

module.exports = RouteStaticMap;
