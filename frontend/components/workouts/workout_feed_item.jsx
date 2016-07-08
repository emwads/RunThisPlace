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
      disp =<span className="big">0.0</span>;
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
                            workoutId={this.props.workout.id}/>;
    }
  },

  displayActivity () {
    const type = this.props.workout.workout_type;

    switch (type) {
      case "run":
        return "went out for a run.";
      case "walk":
        return "went out for a walk.";
      case "hike":
        return "went out on a hike.";
      case "gym":
        return "went to the gym.";
      case "other":
        return "worked out.";
    }
  },

  render () {

    return(
      <div className="feed-list cf">
        <div className="feed-listing-header cf">
          <figure>
            <img className="user-thumb fl" src={this.props.workout.picture_url} />
          </figure>
        <div className="feed-header"><h5>{this.props.workout.username}</h5> {this.displayActivity()}</div>
        </div>

        <div>
        <div className="cf workout-listing-detail">

          <figure>
            <img src={IconConstants.icons(this.props.workout.workout_type)} alt={this.props.workout.workout_type} />
          </figure>
          <div className="workout-listing-div-1">

            <h3><Link to={`/workouts/${this.props.workout.id}`} >{this.props.workout.title}</Link></h3>
            <p>distance</p>
            {this.displayDistance()} mi
          </div>

          <div className="workout-listing-div-3">
            <h4>Date</h4>
            {this.props.workout.date}
            <h4>Workout Type</h4>
            {this.props.workout.workout_type}
          </div>


        </div>
        </div>
        {this.displayComments() }
      </div>
    );

  }

});

module.exports = WorkoutIndexItem;
