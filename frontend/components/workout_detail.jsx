const React = require('react');

const WorkoutDetail = React.createClass({
  render () {

    return(
      <div>

        <h2>{this.props.workout.title}</h2>
        <span>description: {this.props.workout.description}</span><br />
        <span>date: {this.props.workout.date}</span><br />
        <span>distance: {this.props.workout.distance}</span><br />
        <span>exercise type: {this.props.workout.workout_type}</span><br />
        <span>calories: {this.props.workout.calories}</span><br />

      </div>
    );

  }

});

module.exports = WorkoutDetail;
