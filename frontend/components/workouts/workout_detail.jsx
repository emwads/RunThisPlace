const React = require('react');
const WorkoutStore = require('../../stores/workout_store');
const WorkoutActions = require('../../actions/workout_actions');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const RunRouteMap = require('../runroutes/run_route_detail_map');
const IconConstants = require('../../constants/icon_constants');



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
        <div className="detail-description">
          <h2>{this.state.workout.title}</h2>
          <span>description: {this.state.workout.description}</span><br />
          <span>date: {this.state.workout.date}</span><br />
          <span>distance: {this.state.workout.distance}</span><br />
          <span>exercise type: {this.state.workout.workout_type}</span><br />
          <span>calories: {this.state.workout.calories}</span><br />
          <figure>
            <img src={IconConstants.icons(this.state.workout.workout_type)} alt={this.state.workout.workout_type} />
          </figure>
        </div>
      );
    }
  },

  showRouteMap() {
    const self = this;
    if (this.state.workout !== undefined  && this.state.workout.map_info !== undefined) {
      return (<div className='cf'>
        <h3>{this.state.workout.routeTitle}</h3>
        <div>
          <RunRouteMap displayDirections={false}  mapPoints={JSON.parse(this.state.workout.map_info)}/>

        </div>
      </div>);
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
        {this.showRouteMap()}
        {this.editWorkoutButton()}
        {this.deleteWorkoutButton()}
        {this.toDashboardButton()}


      </div>
    );

  }

});

module.exports = WorkoutDetail;
