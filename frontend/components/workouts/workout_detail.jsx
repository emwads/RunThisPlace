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

  icons (type) {
    switch (type) {
      case "walk":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_100/v1467621146/walk-icon_h4lvnc.png';
      case "hike":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_100/v1467621454/noun_45242_cc_hkhvpf.png';
      case "run":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_100/v1467621146/run-icon_p1gdsf.png';
      case "gym":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_100/v1467621146/gym-icon_laruyg.png';
      case "other":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_100/v1467621146/other-icon_cj9ota.png';
    }
  },

  detailWorkout(){
    if (this.state.workout !== undefined) {
      return (
        <div>
          <figure>
            <img src={this.icons(this.state.workout.workout_type)} alt={this.state.workout.workout_type} />
          </figure>
          <h2>{this.state.workout.title}</h2>
          <span>description: {this.state.workout.description}</span><br />
          <span>date: {this.state.workout.date}</span><br />
          <span>distance: {this.state.workout.distance}</span><br />
          <span>exercise type: {this.state.workout.workout_type}</span><br />
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
