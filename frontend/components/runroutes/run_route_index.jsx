const React = require('react');
const RunRouteIndexItem = require('./run_route_index_item');
const Link = require('react-router').Link;


const RunRouteIndex = React.createClass({
  render () {

    return(
      <div className="dash-el-container">
        <h2>Your Routes</h2>
        <Link to="/runroutes/new">Create New Route</Link>

        {this.props.runroutes.map(function (runroute) {
            return (<RunRouteIndexItem key={runroute.id} runroute={runroute} />);
          })}
      </div>
    );

  }

});

module.exports = RunRouteIndex;
