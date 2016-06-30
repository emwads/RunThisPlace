const React = require('react');
const Link = require('react-router').Link;


const WorkoutIndexItem = React.createClass({
  render () {

    return(
      <div className="workout-list">


        <h3><Link to={`/workouts/${this.props.workout.id}`} >{this.props.workout.title}</Link></h3>
        <h4>{this.props.workout.description}</h4>
        <span>{this.props.workout.date}</span>
      </div>
    );

  }

});

module.exports = WorkoutIndexItem;
