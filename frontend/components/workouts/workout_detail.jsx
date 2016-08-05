const React = require('react');
const WorkoutStore = require('../../stores/workout_store');
const WorkoutActions = require('../../actions/workout_actions');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const RunRouteMap = require('../runroutes/run_route_detail_map');
const WorkoutIndexItem = require('./workout_index_item');



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


  showRouteMap() {
    const self = this;
    if (this.state.workout !== undefined  && this.state.workout.map_info !== undefined) {
      return (<div className='cf'>
        <h3>Route: {this.state.workout.routeTitle}</h3>
        <div className="fl">
          <RunRouteMap displayDirections={false}  mapPoints={JSON.parse(this.state.workout.map_info)}/>

        </div>
      </div>);
          }
  },

  editWorkoutButton(){
    if (this.state.workout !== undefined) {
      return (
        <div className="detail-button">
          <button className="grey-button" onClick={ () => {
              hashHistory.push(`workouts/${this.props.params.workoutId}/edit`);
            } }>edit workout</button>

        </div>
      );
    }
  },

  toDashboardButton(){
    return (
      <div className="detail-button">
        <button className="grey-button" onClick={ () => {
            hashHistory.push(`dashboard`);
          } }>Back Home</button>

      </div>
    );

  },


  deleteWorkoutButton(){
    if (this.state.workout !== undefined) {
      return (
        <div className="detail-button" >
          <button className="grey-button" onClick={this.deleteWorkout}>Delete workout</button>
        </div>
      );
    }
  },

  deleteWorkout(){
    WorkoutActions.deleteWorkout(this.props.params.workoutId);
    hashHistory.push("/dashboard");

  },

  render () {
    let detail = "";
    if (this.state.workout) {
      detail = <WorkoutIndexItem showComments={true} workout={this.state.workout} />;
      }

    return(
      <div>
      <br />
      <br />

        <div className="two-col-flex">
          <div>
            {this.editWorkoutButton()}
            {this.deleteWorkoutButton()}
            {this.toDashboardButton()}
            {detail}

          </div>
          {this.showRouteMap()}
        </div>






      </div>
    );

  }

});

module.exports = WorkoutDetail;
