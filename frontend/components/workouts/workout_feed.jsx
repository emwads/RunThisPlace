import React from 'react';
import { Link } from 'react-router';
import WorkoutStore from '../../stores/workout_store';
import WorkoutActions from '../../actions/workout_actions';
import WorkoutFeedItem from './workout_feed_item';
import UserFollowees from '../users/user_followees';


const WorkoutFeed = React.createClass({

  getInitialState() {
    return {workouts: []};
  },

  _workoutsChanged() {
    let workouts=WorkoutStore.all();

    this.setState({workouts: WorkoutStore.all()});
  },



  componentDidMount() {
    this.workoutListener = WorkoutStore.addListener(this._workoutsChanged);
    WorkoutActions.fetchAllWorkouts(true);
  },

  componentWillUnmount() {
    this.workoutListener.remove();
  },

  render () {

    return(
      <div className="feed-page" >

        <div className="full-workouts">

          <header className="feed-header">

          <h2>Activity Feed</h2>

              <div><Link to="/dashboard">
                <span className="buttonify grey-button">{'<< '}
                  Dashboard
                </span>
                </Link>
              </div>

            </header>

            {this.state.workouts.map(function (workout) {
                return (<WorkoutFeedItem key={workout.id}
                                          showComments={true}
                                          workout={workout} />);
              })}
          </div>
        <UserFollowees />
      </div>
    );

  }

});

module.exports = WorkoutFeed;
