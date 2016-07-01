const React = require('react');
const Link = require('react-router').Link;


const WorkoutIndexItem = React.createClass({
  render () {

    return(
      <div className="workout-list">

        <h3><Link to={`/workouts/${this.props.workout.id}`} >{this.props.workout.title}</Link></h3>
        <span>date: {this.props.workout.date}</span><br />
        <span>distance: {this.props.workout.distance}</span><br />
        <span>exercise type: {this.props.workout.workout_type}</span><br />
        <span>calories: {this.props.workout.calories}</span><br />

      </div>
    );

  }

});

module.exports = WorkoutIndexItem;
