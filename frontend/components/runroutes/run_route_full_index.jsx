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
      <div className="full-workouts">
        <header className="dash-el-header">
          <h2>My Routes</h2><br />
            <Link to="/dashboard"><span className="buttonify grey-button">{'<< '}Dashboard</span></Link>

        </header>

        {this.state.runroutes.map(function (runroute) {
            return (
              <div className="il" key={runroute.id + 0.5} >

                <RunRouteIndexItem key={runroute.id} runroute={runroute} />
              </div>);
          })}
      </div>
    );

  }

});

module.exports = RunRouteFullIndex;
