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
      <div >

      <form className="comment-form cf" onSubmit={this.handleSubmit} >


        <img className="user-thumb fl" src={SessionStore.currentUser().picture_url} />
        <label htmlFor="body">
          <textarea id="body"
            className="fl"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Write a comment..."></textarea>
        </label>
        <input type="submit" className="no-margin fl" value="Post" />

        <br />




      </form>
  </div>
    );
  }
});

module.exports = CommentForm;
