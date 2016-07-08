const React = require('react');
const WorkoutStore = require('../../stores/workout_store');
const WorkoutActions = require('../../actions/workout_actions');
const Link = require('react-router').Link;
const WorkoutFeedItem = require('./workout_feed_item');


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
      <div className="full-workouts">
        <header className="dash-el-header">

        <h2>Activity Feed</h2>
          <br />
          <br />
            <Link to="/dashboard">
              <span className="buttonify grey-button">{'<< '}
                Dashboard
              </span>
            </Link>
        </header>

        {this.state.workouts.map(function (workout) {
            return (<WorkoutFeedItem key={workout.id}
                                      showComments={true}
                                      workout={workout} />);
          })}
      </div>
    );

  }

});

module.exports = WorkoutFeed;
