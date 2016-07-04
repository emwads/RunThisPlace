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
      <div className="dash-list cf">
        <div className="route-description">

          <h3><Link to={`/runroutes/${this.props.runroute.id}`} >{this.props.runroute.title}</Link></h3>
          <span>{this.props.runroute.description}</span><br />
        </div>

          {this.renderMap()}

      </div>
    );

  }

});

module.exports = RunRouteIndexItem;
