const React = require('react');
const ReactDOM = require('react-dom');



const mapOptions = {
  center: {lat: 37.7758, lng: -122.435},
  zoom: 13
};

const RouteFormMap = React.createClass({

  componentDidMount(){
    this.markers=[];
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



  displayRoute(coordsArray) {

    const origin = coordsArray[0];
    const destination = coordsArray[coordsArray.length - 1];

    console.log(origin);
    console.log(destination);

    const self =this;

    self.directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.WALKING,
    }, function(response, status) {
      console.log(response);
      if (status === google.maps.DirectionsStatus.OK) {
        self.directionsDisplay.setOptions({ preserveViewport: true });
        self.directionsDisplay.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
  },



  componentDidUpdate(){

    if (this.props.mapPoints.length <= 1) {
      this.removeAllMarkers();
      this.directionsDisplay.setMap(null);
    }

    if (this.props.mapPoints.length === 1) {
      this.createAllMarkers();
    } else if (this.props.mapPoints.length >= 2) {
      this.removeAllMarkers();

      this.directionsDisplay.setMap(this.map);
      this.displayRoute(this.props.mapPoints);
    }
  },


  componentWillUnmount(){
    this.mapsListener.remove();
    this.directionsListener.remove();
  },

  computeTotalDistance(result) {
    var total = 0;
    var myroute = result.routes[0];
    for (var i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].distance.value;
    }

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
      title: "point"
    });
    // marker.addListener('click', () => {
    //   alert('clicked');
    // });
    if (this.markers){
      this.markers.push(marker);
    } else {
      this.markers = [marker];
    }

  },

  removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  },

  createAllMarkers () {
    this.props.mapPoints.forEach( (singleCoord) =>{
      this.createMarker(singleCoord);
    }
    );
  },

  removeAllMarkers () {
    this.markers.forEach( (marker) =>{
      this.removeMarker(marker);
    }
    );
  },


  render () {

    return(
      <div className="map" ref="map">Map</div>
    );

  }

});

module.exports = RouteFormMap;
