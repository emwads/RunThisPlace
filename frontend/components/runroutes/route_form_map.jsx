const React = require('react');
const ReactDOM = require('react-dom');



const mapOptions = {
  center: {lat: 37.7758, lng: -122.435},
  zoom: 13
};

const RouteFormMap = React.createClass({


  displayRoute(coordsArray) {

    const origin = coordsArray[0];
    const destination = coordsArray[coordsArray.length - 1];
    let waypoints = coordsArray.slice(1, -1).map( (coord) => {
         return {location: coord};
        });

    // console.log(`coordsArray ${coordsArray}`);
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
      self.props.runroute = response;
      console.log(response);
      if (status === google.maps.DirectionsStatus.OK) {
        self.directionsDisplay.setOptions({ preserveViewport: true });
        self.directionsDisplay.setDirections(response);
        self.directionsDisplay.setMap(self.map);
      } else {
        alert('Could not display directions due to: ' + status);
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
    this.props.distance = total;
    document.getElementById('total').innerHTML = total + ' mi';
  },



  addListener () {
    const self = this;
    this.mapsListener = google.maps.event.addListener(this.map, 'click', event => {
      const coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      this._handleClick(coords);
    });


    this.directionsListener = this.directionsDisplay.addListener('directions_changed', function() {
      self.computeTotalDistance(self.directionsDisplay.getDirections());
    });
  },

  _handleClick(coords) {
    this.props.mapPoints.push(coords);
    this.props.event();
  },

  createMarker(coords) {
    const marker = new google.maps.Marker({
      position: coords,
      map: this.map,
      draggable: true,
      title: "point"
    });

    google.maps.event.addListener(marker, 'dragend', function() {
      self.directionsDisplay.getDirections();
    });

    this.markers.push(marker);
  },

  removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  },

  createAllMarkers () {
    this.props.mapPoints.forEach( (singleCoord) =>{
      this.createMarker(singleCoord);
    });
  },

  createStartEndMarkers () {
    const points = this.props.mapPoints;

    this.createMarker(points[points.length-1]);
    this.createMarker(points[0]);

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
      draggable: true,
      panel: document.getElementById('routeInfo')
    });

    this.createAllMarkers();
    this.addListener();
  },


    componentDidUpdate(){
      this.removeAllMarkers();

      // if (this.props.mapPoints.length <= 1) {
      //   this.directionsDisplay.setMap(null);
      //   this.createAllMarkers();
      // } else if (this.props.mapPoints.length >= 2) {
      //   this.createStartEndMarkers();
      //   this.displayRoute(this.props.mapPoints);
      // }


      if (this.props.mapPoints.length <= 1) {
        this.directionsDisplay.setMap(null);
        this.createAllMarkers();
      } else if (this.props.mapPoints.length >= 2) {
        this.displayRoute(this.props.mapPoints);
      }


    },


    componentWillUnmount(){
      this.removeAllMarkers();
      this.mapsListener.remove();
      this.directionsListener.remove();
    },


  render () {

    return(
      <div className="map" ref="map">Map</div>
    );

  }

});

module.exports = RouteFormMap;
