const React = require('react');
const Link = require('react-router').Link;
const WorkoutActions = require('../../actions/workout_actions');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../stores/session_store');


const CommentForm = React.createClass({
  getInitialState() {
    return {
      body: ""
    };
  },

  handleSubmit(event) {

    event.preventDefault();
    const comment = {
      body: this.state.body,
      workout_id: this.props.workoutId
    };

    WorkoutActions.createComment(comment);

    this.setState({body: ""});
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },


  render () {

    return(
      <div className="comment-form">

      <form onSubmit={this.handleSubmit}>

        <br />
        <img className="user-thumb" src={SessionStore.currentUser().picture_url} />
        <label for="body">
          <textarea id="body"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Write a comment..."></textarea>
        </label>

        <br />


        <input type="submit" className="submit" value="Post" />


      </form>
  </div>
    );
  }
});

module.exports = CommentForm;
