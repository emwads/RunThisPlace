const React = require('react');
const Link = require('react-router').Link;
const RouteActions = require('../actions/workout_actions');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store');


const RouteForm = React.createClass({
  getInitialState() {
    return {
      description: "",
      title: "",
    };
  },

  handleSubmit(event) {
    event.preventDefault();
    const workout = Object.assign({}, this.state);
    workout["user_id"]=SessionStore.currentUser().id;
    RouteActions.createRoute(workout);
    hashHistory.push("/dashboard");

  },

  handleCancel(event) {
    event.preventDefault();
    hashHistory.push("/dashboard");
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },


  render () {

    return(
      <div className="create-workout-container">
      <form onSubmit={this.handleSubmit}>
           <h3>Log a workout</h3>


        <label for="title">
          <input id="title" type="text"
            value={this.state.title}
            onChange={this.update("title")}
            placeholder="title" />
        </label>

        <br />
        <label for="description">Describe your workout: <br />
          <textarea id="description"
            value={this.state.description}
            onChange={this.update("description")}
            placeholder="description"></textarea>
        </label>


      <br />
        <input type="submit" className="submit" value="Save Route" /> <br />

        <button onClick={this.handleCancel}>Cancel</button>

      </form>
    </div>

    );

  }

});

module.exports = RouteForm;
