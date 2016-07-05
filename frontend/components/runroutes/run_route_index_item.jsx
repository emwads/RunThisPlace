const React = require('react');
const Link = require('react-router').Link;
const RouteDetailMap = require('./run_route_detail_map');


const RunRouteIndexItem = React.createClass({

  renderMap() {
    if (this.props.runroute) {
      return (<RouteDetailMap mapPoints={JSON.parse(this.props.runroute.map_info)}
              displayDirections={false} />);
    }
  },

  render () {

    return(
          <div className="map-thumb-display">
            <Link to={`/runroutes/${this.props.runroute.id}`} >
            {this.renderMap()}
            <div className="map-overlay-tile">{this.props.runroute.title}</div>
            </Link>
          </div>

    );

  }

});

module.exports = RunRouteIndexItem;
