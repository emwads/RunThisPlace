const React = require('react');
const Link = require('react-router').Link;
const WorkoutActions = require('../../actions/workout_actions');
const SessionStore = require('../../stores/session_store');


const CommentIndexItem = React.createClass({
  displayDelete () {
    if (SessionStore.currentUser().id === this.props.comment.author_id ||
        this.props.workoutOwner === this.props.comment.author_id)
    return (
        <h5 className="text-link" onClick={this.handleDelete}>Delete</h5>

    );
  },

  handleDelete() {
    WorkoutActions.deleteComment(this.props.comment.id);

  },
  render () {
    return(
      <div className="single-comment">
        <div><img className="user-thumb" src={this.props.comment.picture_url} />
        <span> {this.props.comment.body}</span></div>
        {this.displayDelete()}
      </div>
    );

  }

});

module.exports = CommentIndexItem;
