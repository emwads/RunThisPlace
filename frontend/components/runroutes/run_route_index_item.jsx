const React = require('react');
const Link = require('react-router').Link;
const RouteStaticMap = require('./run_route_static_map');


const RunRouteIndexItem2 = React.createClass({

  renderMap() {
      return (<RouteStaticMap routePath={this.props.runroute.route_path} />);
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

module.exports = RunRouteIndexItem2;
