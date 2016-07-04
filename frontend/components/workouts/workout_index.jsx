const React = require('react');
const WorkoutIndexItem = require('./workout_index_item');
const Link = require('react-router').Link;


const WorkoutIndex = React.createClass({
  render () {

    return(
      <div className="dash-el-container">
        <div className="dash-el-header">

          <h2>My Workouts</h2>
          <br />
          <Link to="/workouts/new"> + Log Workout</Link>
        </div>

        {this.props.workouts.map(function (workout) {
            return (<WorkoutIndexItem key={workout.id} workout={workout} />);
          })}
      </div>
    );

  }

});

module.exports = WorkoutIndex;
