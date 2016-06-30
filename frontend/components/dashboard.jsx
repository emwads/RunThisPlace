const React = require('react');
const WorkoutIndex = require('./workout_index');
const WorkoutStore = require('../stores/workout_store');
const WorkoutActions = require('../actions/workout_actions');

const Dashboard = React.createClass({



  getInitialState() {
    return {
      workouts: WorkoutStore.all(),
    };
  },

  _workoutsChanged() {
    this.setState({workouts: WorkoutStore.all()});
  },

  componentDidMount() {
    this.workoutListener = WorkoutStore.addListener(this._workoutsChanged);
    WorkoutActions.fetchAllWorkouts();
  },

  componentWillUnmount() {
    this.workoutListener.remove();
  },



  render () {
    return(
      <div>
        <h1>My Dashboard</h1>
        <WorkoutIndex workouts={this.state.workouts} />
      </div>
    );

  }

});

module.exports = Dashboard;
