const React = require('react');
const WorkoutStore = require('../../stores/workout_store');
const WorkoutActions = require('../../actions/workout_actions');
const Link = require('react-router').Link;
const WorkoutIndexItem = require('./workout_index_item');


const WorkoutFullIndex = React.createClass({

  getInitialState() {
    return {workouts: []};
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
      <div className="dash-el-container">
        <header className="dash-el-header">

        <h2>My Workouts</h2>
          <br />
            <Link to="/dashboard">
              <span className="buttonify grey-button">{'<<'}
                Dashboard
              </span>
            </Link>
        </header>

        {this.state.workouts.map(function (workout) {
            return (<WorkoutIndexItem key={workout.id}
                                      showComments={true}
                                      workout={workout} />);
          })}
      </div>
    );

  }

});

module.exports = WorkoutFullIndex;
