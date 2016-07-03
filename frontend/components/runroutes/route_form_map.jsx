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

    this.createAllMarkers();
    this.addListener();

    const directionsDisplay = new google.maps.DirectionsRenderer({
      draggable: true,
      map: this.map,
      panel: document.getElementById('right-panel')
    });


  },


  componentDidUpdate(){
    this.removeAllMarkers();
    this.createAllMarkers();

  },


  componentWillUnmount(){
    this.mapsListener.remove();
  },


  addListener () {
    this.mapsListener = google.maps.event.addListener(this.map, 'click', event => {
      const coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      this._handleClick(coords);
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
