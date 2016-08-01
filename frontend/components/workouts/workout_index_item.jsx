const React = require('react');
const Link = require('react-router').Link;
const IconConstants = require('../../constants/icon_constants');
const CommentIndex = require('../comments/comment_index');

const WorkoutIndexItem = React.createClass({


  displayDistance () {
    let disp = "";

    if (this.props.workout.distance !== null) {
      disp = <span className="big">{this.props.workout.distance}</span>;
    } else {
      disp =<span className="big">-.-</span>;
    }
    return disp;
  },

  displayCalories () {
    let disp = "";

    if (this.props.workout.calories !== null) {
      disp = <span className="calories">{this.props.workout.calories}</span>;
    } else {
      disp = <span className="calories">--</span>;
    }
    return disp;
  },

  displayComments () {
    if (this.props.showComments === true) {
      return <CommentIndex comments={this.props.workout.comments}
                            workoutOwner={this.props.workout.user_id}
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

          <div className="workout-listing-div-1">
            <h3><Link to={`/workouts/${this.props.workout.id}`} >{this.props.workout.title}</Link></h3>
            <p>distance</p>
            {this.displayDistance()} mi
          </div>

          <div className="workout-listing-div-2">
            <h4>Calories</h4>
            {this.displayCalories()}

          </div>

          <div className="workout-listing-div-3">
            <h4>Date</h4>
            {this.props.workout.date}
            <h4>Workout Type</h4>
            {this.props.workout.workout_type}
          </div>

        </div>
        {this.displayComments() }
      </div>
    );

  }

});

module.exports = WorkoutIndexItem;
