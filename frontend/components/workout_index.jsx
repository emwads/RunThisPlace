const React = require('react');
const WorkoutIndexItem = require('./workout_index_item');

const WorkoutIndex = React.createClass({
  render () {

    return(
      <div className="workout-container">
        <h2>Workouts</h2>

        {this.props.workouts.map(function (workout) {
            return (<WorkoutIndexItem key={workout.id} workout={workout} />);
          })}
      </div>
    );

  }

});

module.exports = WorkoutIndex;
