const React = require('react');
const WorkoutIndex = require('./workouts/workout_index');
const WorkoutStore = require('../stores/workout_store');
const WorkoutActions = require('../actions/workout_actions');
const RunRouteIndex = require('./runroutes/run_route_index');
const RunRouteStore = require('../stores/run_route_store');
const RunRouteActions = require('../actions/run_route_actions');


const Dashboard = React.createClass({

  getInitialState() {
    return {
      workouts: WorkoutStore.all(), runroutes: RunRouteStore.all()
    };
  },

  _workoutsChanged() {
    this.setState({workouts: WorkoutStore.all()});
  },

  _runRoutesChanged() {
    this.setState({runroutes: RunRouteStore.all()});
  },

  componentDidMount() {
    this.workoutListener = WorkoutStore.addListener(this._workoutsChanged);
    WorkoutActions.fetchAllWorkouts();

    this.runRouteListener = RunRouteStore.addListener(this._runRoutesChanged);
    RunRouteActions.fetchAllRunRoutes();
  },

  componentWillUnmount() {
    this.workoutListener.remove();
    this.runRouteListener.remove();
  },



  render () {
    return(
      <div>
        <h1 className="dash-header">My Dashboard</h1>
        <WorkoutIndex workouts={this.state.workouts} />

        <RunRouteIndex runroutes={this.state.runroutes} />

      </div>
    );

  }

});

module.exports = Dashboard;
