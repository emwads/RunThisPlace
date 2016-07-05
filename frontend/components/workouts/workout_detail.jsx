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
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_100/v1467702925/walk-icon_t8aqbt.png';
      case "hike":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_100/v1467702926/hike-icon_jfremu.png';
      case "run":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_100/v1467702925/run-icon_mbjr0r.png';
      case "gym":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_100/v1467702925/gym-icon_xl5oy6.png';
      case "other":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_100/v1467702925/other-icon_ndjrlb.png';
    }
  },

  detailWorkout(){
    if (this.state.workout !== undefined) {
      return (
        <div className="detail-description">
          <h2>{this.state.workout.title}</h2>
          <span>description: {this.state.workout.description}</span><br />
          <span>date: {this.state.workout.date}</span><br />
          <span>distance: {this.state.workout.distance}</span><br />
          <span>exercise type: {this.state.workout.workout_type}</span><br />
          <span>calories: {this.state.workout.calories}</span><br />
          <figure>
            <img src={this.icons(this.state.workout.workout_type)} alt={this.state.workout.workout_type} />
          </figure>
        </div>
      );
    }
  },

  editWorkoutButton(){
    if (this.state.workout !== undefined) {
      return (
        <div className="detail-button">
          <button  onClick={ () => {
              hashHistory.push(`workouts/${this.props.params.workoutId}/edit`);
            } }>edit workout</button>

        </div>
      );
    }
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


  deleteWorkoutButton(){
    if (this.state.workout !== undefined) {
      return (
        <div className="detail-button" >
          <button  onClick={this.deleteWorkout}>Delete workout</button>
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
        {this.editWorkoutButton()}
        {this.deleteWorkoutButton()}
        {this.toDashboardButton()}
      </div>
    );

  }

});

module.exports = WorkoutDetail;
