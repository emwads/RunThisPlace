const React = require('react');
const WorkoutStore = require('../../stores/workout_store');
const WorkoutActions = require('../../actions/workout_actions');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

const WorkoutDetail = React.createClass({
  getStateFromStore () {
    return {workout: WorkoutStore.find(parseInt(this.props.params.workoutId))};

  },
  getInitialState() {
    return this.getStateFromStore();
  },

  _workoutsChanged() {
    this.setState(this.getStateFromStore());
  },

  componentDidMount() {
    this.workoutListener = WorkoutStore.addListener(this._workoutsChanged);
    WorkoutActions.fetchSingleWorkout(parseInt(this.props.params.workoutId));
  },

  componentWillUnmount() {
    this.workoutListener.remove();
  },

  detailWorkout(){
    if (this.state.workout !== undefined) {
      return (
        <div>
          <h2>{this.state.workout.title}</h2>
          <span>description: {this.state.workout.description}</span><br />
          <span>date: {this.state.workout.date}</span><br />
          <span>distance: {this.state.workout.distance}</span><br />
          <span>exercise type: {this.state.workout.workoutType}</span><br />
          <span>calories: {this.state.workout.calories}</span><br />
        </div>
      );
    }
  },

  editWorkoutButton(){
    if (this.state.workout !== undefined) {
      return (
        <div>
          <button onClick={ () => {
              hashHistory.push(`workouts/${this.props.params.workoutId}/edit`);
            } }>edit workout</button>

        </div>
      );
    }
  },

  deleteWorkoutButton(){
    if (this.state.workout !== undefined) {
      return (
        <div>
          <button onClick={this.deleteWorkout}>Delete workout</button>
        </div>
      );
    }
  },

  deleteWorkout(){
    WorkoutActions.deleteWorkout(this.props.params.workoutId);
    hashHistory.push("/dashboard");

  },

  render () {



    return(
      <div>
        {this.detailWorkout()}
        <br />
        <br />
        {this.editWorkoutButton()}
        <br />
        <br />
        {this.deleteWorkoutButton()}
      </div>
    );

  }

});

module.exports = WorkoutDetail;
