import React from 'react';
import { Link } from 'react-router';
import WorkoutStore from '../../stores/workout_store';
import WorkoutActions from '../../actions/workout_actions';
import WorkoutIndexItem from './workout_index_item';


const WorkoutFullIndex = React.createClass({

  getInitialState() {
    return {workouts: []};
  },

  _workoutsChanged() {

    this.setState({workouts: WorkoutStore.all()});
  },



  componentDidMount() {
    this.workoutListener = WorkoutStore.addListener(this._workoutsChanged);
    WorkoutActions.fetchAllWorkouts(false);
  },

  componentWillUnmount() {
    this.workoutListener.remove();
  },

  render () {

    return(
      <div className="full-workouts">
        <header className="dash-el-header">

        <h2>My Workouts</h2>
          <br />
          <br />
            <Link to="/dashboard">
              <span className="buttonify grey-button">{'<< '}
                Dashboard
              </span>
            </Link>
        </header>

        {this.state.workouts.map(function (workout) {
            return (<WorkoutIndexItem key={workout.id}
                                      showComments={false}
                                      workout={workout} />);
          })}
      </div>
    );

  }

});

module.exports = WorkoutFullIndex;
