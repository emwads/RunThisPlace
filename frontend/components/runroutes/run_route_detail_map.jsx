const React = require('react');
const ReactDOM = require('react-dom');



const mapOptions = {
  center: {lat: 37.7758, lng: -122.435},
  zoom: 15,
  draggable: false,
  disableDoubleClickZoom: true,
  scrollwheel: false,
  disableDefaultUI: true,
  clickableIcons: false
};

const RouteDetailMap = React.createClass({


  displayRoute(mapPoints) {

    const origin = mapPoints[0].location;
    const destination = mapPoints[mapPoints.length - 1].location;
    let waypoints = mapPoints.slice(1, -1);

    const self =this;

    self.directionsService.route({
      origin: origin,
      destination: destination,
      waypoints: waypoints,
      travelMode: google.maps.TravelMode.WALKING,
    }, function(response, status) {

      if (status === google.maps.DirectionsStatus.OK) {
        self.directionsDisplay.setDirections(response);
        self.directionsDisplay.setMap(self.map);
      } else {
        console.log('Could not display directions due to: ' + status);
      }
    });
  },


  updateMapDirections() {
      this.displayRoute(this.props.mapPoints);
  },

  displayDirections(){
    let panel = "";
    if (this.props.displayDirections === true) {
      panel = (<div  className="direction-panel">
              <h3>Directions</h3>
              <div id="routeInfo"></div>
            </div>);
    }
    return panel;
  },

  displayMap() {
    // if (this.props.displayDirections === true) {
    // return(<div className="map" ref="map">Map</div>);
    // } else {
    //   return (<div className="map-thumb" ref="map">Map</div>);
    // }

    return(<div className="map" ref="map">Map</div>);

  },

  componentDidMount(){
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);

    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    if (this.props.displayDirections === true) {
      this.map.setOptions({options: {draggable: true, scrollwheel: true}});
    }

    this.directionsService = new google.maps.DirectionsService;

    this.directionsDisplay = new google.maps.DirectionsRenderer({
      panel: document.getElementById('routeInfo')
    });

    this.updateMapDirections();
  },


  componentDidUpdate(){
    this.updateMapDirections();
  },



  render () {

    return(
      <div>

        {this.displayMap()}
        {this.displayDirections()}
      </div>
    );}

});

module.exports = RouteDetailMap;
