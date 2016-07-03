const React = require('react');
const RunRouteStore = require('../../stores/run_route_store');
const RunRouteActions = require('../../actions/run_route_actions');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

const RunRouteDetail = React.createClass({
  getStateFromStore () {
    return {runroute: RunRouteStore.find(parseInt(this.props.params.runRouteId))};

  },
  getInitialState() {
    return this.getStateFromStore();
  },

  _runRoutesChanged() {
    this.setState(this.getStateFromStore());
  },

  componentDidMount() {
    this.runRouteListener = RunRouteStore.addListener(this._runRoutesChanged);
    RunRouteActions.fetchSingleRunRoute(parseInt(this.props.params.runRouteId));
  },

  componentWillUnmount() {
    this.runRouteListener.remove();
  },

  detailRunRoute(){
    if (this.state.runroute !== undefined) {
      return (
        <div>
          <h2>{this.state.runroute.title}</h2>
          <span>description: {this.state.runroute.description}</span><br />
          <span>distance: {this.state.runroute.distance}</span><br />
          <span>map info: {this.state.runroute.map_info}</span><br />

        </div>
      );
    }
  },

  // editRunRouteButton(){
  //   if (this.state.runroute !== undefined) {
  //     return (
  //       <div>
  //         <Link to={`runroutes/${this.props.params.runRouteId}/edit`}>
  //           Edit Route
  //         </Link>
  //       </div>
  //     );
  //   }
  // },

  deleteRunRouteButton(){
    if (this.state.runroute !== undefined) {
      return (
        <div>
          <button onClick={this.deleteRunRoute}>Delete Route</button>
        </div>
      );
    }
  },

  deleteRunRoute(){
    RunRouteActions.deleteRunRoute(this.props.params.runRouteId);
    hashHistory.push("/dashboard");

  },

  render () {



    return(
      <div>
        {this.detailRunRoute()}
        <br />
        <br />
        {this.deleteRunRouteButton()}
      </div>
    );

  }

});

module.exports = RunRouteDetail;
