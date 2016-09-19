import React from 'react';
import { Link } from 'react-router';
import WorkoutStore from '../../stores/workout_store';
import WorkoutActions from '../../actions/workout_actions';
import { hashHistory } from 'react-router';
import RunRouteMap from '../runroutes/run_route_detail_map';
import WorkoutIndexItem from './workout_index_item';

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
          {this.showRouteMap()}
          <div>
            {this.editWorkoutButton()}
            {this.deleteWorkoutButton()}
            {this.toDashboardButton()}
            {detail}

          </div>
        </div>






      </div>
    );

  }

});

module.exports = WorkoutDetail;
