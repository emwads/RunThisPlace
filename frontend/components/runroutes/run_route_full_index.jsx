const React = require('react');
const RunRouteStore = require('../../stores/run_route_store');
const RunRouteActions = require('../../actions/run_route_actions');
const RunRouteIndexItem = require('./run_route_index_item');
const Link = require('react-router').Link;


const RunRouteFullIndex = React.createClass({


    getInitialState() {
      return {runroutes: []};
    },

    _runRoutesChanged() {
      this.setState({runroutes: RunRouteStore.all()});
    },

    componentDidMount() {
      this.runRouteListener = RunRouteStore.addListener(this._runRoutesChanged);
      RunRouteActions.fetchAllRunRoutes();
    },

    componentWillUnmount() {
      this.runRouteListener.remove();
    },

  render () {

    return(
      <div className=" dash-el-container dash-route-container cf">
        <div className="dash-el-header">
          <h2>Routes</h2><br />
            <Link to="/dashboard">{'<<'} Dashboard</Link>
            <Link to="/runroutes/new">+ Create New Route</Link>

        </div>

        {this.state.runroutes.map(function (runroute) {
            return (<RunRouteIndexItem key={runroute.id} runroute={runroute} />);
          })}
      </div>
    );

  }

});

module.exports = RunRouteFullIndex;
