const React = require('react');
const RunRouteIndexItem = require('./run_route_index_item');
const Link = require('react-router').Link;


const RunRouteIndex = React.createClass({
  render () {

    return(
      <div className=" dash-el-container dash-route-container cf">
        <div className="dash-el-header">
          <h2>Recent Routes</h2><br />
          <Link to="/runroutes/new">+ Create New Route</Link> |
            <Link to="/runroutes"> All Routes</Link>

        </div>

        {this.props.runroutes.slice(0,4).map(function (runroute) {
            return (<RunRouteIndexItem key={runroute.id} runroute={runroute} />);
          })}
      </div>
    );

  }

});

module.exports = RunRouteIndex;
