const React = require('react');
const RunRouteStore = require('../../stores/run_route_store');
const RunRouteActions = require('../../actions/run_route_actions');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const RouteDetailMap = require('./run_route_detail_map');

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
        <div className="detail-description">
          <h2>{this.state.runroute.title}</h2>
          <span>description: {this.state.runroute.description}</span><br />
          <span>distance: {this.state.runroute.distance}</span><br />
            {this.deleteRunRouteButton()}
            {this.toDashboardButton()}


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
        <div className="detail-button">
          <button onClick={this.deleteRunRoute}>Delete Route</button>
        </div>
      );
    }
  },

  deleteRunRoute(){
    RunRouteActions.deleteRunRoute(this.props.params.runRouteId);
    hashHistory.push("/dashboard");

  },

  toDashboardButton(){
    return (
      <div className="detail-button">
        <button onClick={ () => {
            hashHistory.push(`dashboard`);
          } }>Back Home</button>

      </div>
    );

  },

  renderMap() {
    if (this.state.runroute) {
      return (<RouteDetailMap mapPoints={JSON.parse(this.state.runroute.map_info)}
              displayDirections={true} />);
    }
  },


  render () {


    return(
      <div>
        {this.detailRunRoute()}
        {this.renderMap()}

        <br />
      </div>
    );

  }

});

module.exports = RunRouteDetail;
