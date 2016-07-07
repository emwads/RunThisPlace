const React = require('react');
const Link = require('react-router').Link;
const IconConstants = require('../../constants/icon_constants');
const CommentIndex = require('../comments/comment_index');

const WorkoutIndexItem = React.createClass({


  displayDistance () {
    let disp = "";

    if (this.props.workout.distance !== null) {
      disp = <li>distance: {this.props.workout.distance}</li>;
    }
    return disp;
  },

  displayCalories () {
    let disp = "";

    if (this.props.workout.calories !== null) {
      disp = <li>calories: {this.props.workout.calories}</li>;
    }
    return disp;
  },

  displayComments () {
    if (this.props.showComments === true) {
      return <CommentIndex comments={this.props.workout.comments}
                            workoutId={this.props.workout.id}/>;
    }
  },

  render () {

    return(
      <div className="dash-list cf">
        <div className="cf workout-listing-detail">
          <figure>
            <img src={IconConstants.icons(this.props.workout.workout_type)} alt={this.props.workout.workout_type} />
          </figure>
          <h3><Link to={`/workouts/${this.props.workout.id}`} >{this.props.workout.title}</Link></h3>
          <div>
            <ul>
              <li>date: {this.props.workout.date}</li>
              {this.displayDistance()}
              <li>exercise type: {this.props.workout.workout_type}</li>
                {this.displayCalories()}
            </ul>
          </div>
        </div>
        {this.displayComments() }
      </div>
    );

  }

});

module.exports = WorkoutIndexItem;
