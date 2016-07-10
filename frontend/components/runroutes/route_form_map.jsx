const React = require('react');
const ReactDOM = require('react-dom');



const mapOptions = {
  center: {lat: 37.7758, lng: -122.435},
  zoom: 13
};

const RouteFormMap = React.createClass({


  displayRoute(coordsArray) {

    const origin = coordsArray[0].location;
    const destination = coordsArray[coordsArray.length - 1].location;
    let waypoints = coordsArray.slice(1, -1);
    // console.log(coordsArray);
    // console.log(`origin ${origin}`);
    // console.log(`destination ${destination}`);
    // console.log(`waypoints ${waypoints}`);

    const self =this;

    self.directionsService.route({
      origin: origin,
      destination: destination,
      waypoints: waypoints,
      travelMode: google.maps.TravelMode.WALKING,
    }, function(response, status) {
      // self.props.onUpdate('routePath', response.routes[0].overview_polyline);

      if (status === google.maps.DirectionsStatus.OK) {
        self.directionsDisplay.setOptions({ preserveViewport: true });
        self.directionsDisplay.setDirections(response);
        self.directionsDisplay.setMap(self.map);
      } else {
        console.log('Could not display directions due to: ' + status);
      }
    });
  },


  computeTotalDistance(result) {

    let total = 0;
    let myroute = result.routes[0];
    for (let i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].distance.value;
    }
    total *= 0.000621371;
    total = Math.round(total * 100) / 100;
    console.log('sengin dist update to parent');
    this.props.updateDist(total);
    return total;
  },



  addListeners () {
    const self = this;
    this.mapsListener = google.maps.event.addListener(this.map, 'click', event => {
      const wayPoint = {location: { lat: event.latLng.lat(), lng: event.latLng.lng() }, stopover: false};
      this._handleClick(wayPoint);
    });


    // this.directionsListener = this.directionsDisplay.addListener('directions_changed', function() {
    //   console.log('sending directions calculationg request');
    //   self.computeTotalDistance(self.directionsDisplay.getDirections());
    //   // console.log(self.directionsDisplay.getDirections());
    // });
  },

  _handleClick(wayPoint) {
    this.props.updateMapPoints(wayPoint);
  },

  createMarker(coords) {
    const marker = new google.maps.Marker({
      position: coords,
      map: this.map,
    });
    // const marker = new google.maps.Marker({
    //   position: coords,
    //   map: this.map,
    //   draggable: true,
    //   title: "point"
    // });

    this.markers.push(marker);
  },

  removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  },

  createAllMarkers () {
    this.props.mapPoints.forEach( (singleMapPoint) =>{
      this.createMarker(singleMapPoint.location);
    });
  },

  createStartEndMarkers () {
    const points = this.props.mapPoints;

    this.createMarker(points[points.length-1].location);
    this.createMarker(points[0].location);

  },

  removeAllMarkers () {
    this.markerListeners.forEach( (listener) => {
      listener.remove();
    });

    this.markers.forEach( (marker) =>{
      this.removeMarker(marker);
    });

    this.markers=[];
  },

  componentDidMount(){
    this.markers=[];
    this.markerListeners =[];
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);

    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    this.directionsService = new google.maps.DirectionsService;

    this.directionsDisplay = new google.maps.DirectionsRenderer({
    });
    // this.directionsDisplay = new google.maps.DirectionsRenderer({
    //   draggable: true,
    // });

    this.createAllMarkers();
    this.addListeners();



  },
  componentWillReceiveProps(nextProps){
    console.log('nextProps:');
    console.log(nextProps);
  },

  shouldComponentUpdate (nextProps, nextState) {

    console.log('old props');
    console.log(this.props);
    console.log(`next props:`);
    console.log(nextProps);

    // return (nextProps.distance !== this.props.distance);

    // console.log(Object.is(nextProps.mapPoints, this.props.mapPoints));
//     console.log(!Object.is(nextProps.mapPoints, this.props.mapPoints));
// return (!Object.is(nextProps.mapPoints, this.props.mapPoints));


  // if (Object.is(nextProps.mapPoints, this.props.mapPoints)) {
  //     return (false);
  //   }
  //
    return true;

    // return (nextProps.distance === this.props.distance) &&
    // (nextProps.routePath !== this.props.routePath) ;

  },

    componentWillUpdate(){
      console.log(this.props.mapPoints);
      this.removeAllMarkers();

      const mapPoints = this.props.mapPoints;

      if (mapPoints.length <= 1) {
        this.directionsDisplay.setMap(null);
        this.createAllMarkers();
      } else if (mapPoints.length >= 2) {
        this.displayRoute(mapPoints);

      }
      console.log('this.directionsDisplay:');
      console.log(this.directionsDisplay);
      if (this.directionsDisplay.map !== null){
       console.log(this.computeTotalDistance(this.directionsDisplay.getDirections()));
     }
    },


    componentWillUnmount(){
      this.removeAllMarkers();
      this.mapsListener.remove();
      this.directionsListener.remove();

    },




  render () {
    console.log('rendering');
    return(

      <div className="map" ref="map">Map</div>
);

  }

});

module.exports = RouteFormMap;
