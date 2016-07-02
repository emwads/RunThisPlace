const React = require('react');
const WorkoutIndexItem = require('./workout_index_item');
const Link = require('react-router').Link;


const WorkoutIndex = React.createClass({
  render () {

    return(
      <div className="dash-el-container">
        <h2>Workouts</h2>
        <Link to="/workouts/new">Log Workout</Link>

        {this.props.workouts.map(function (workout) {
            return (<WorkoutIndexItem key={workout.id} workout={workout} />);
          })}
      </div>
    );

  }

});

module.exports = WorkoutIndex;
