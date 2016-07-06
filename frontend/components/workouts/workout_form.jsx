const React = require('react');
const Link = require('react-router').Link;
const WorkoutActions = require('../../actions/workout_actions');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../stores/session_store');


const WorkoutForm = React.createClass({
  getInitialState() {
    return {
      description: "",
      workout_type: "run",
      title: "",
      calories: "",
      distance: "",
      date: "",
      run_route_id: ""
    };
  },

  handleSubmit(event) {
    event.preventDefault();
    const workout = {
      workout_type: this.state.workout_type,
      run_route_id: this.state.run_route_id,
      title: this.state.title,
      description: this.state.description,
      calories: this.state.calories,
      distance: this.state.distance,
      date: this.state.date
    };
    WorkoutActions.createWorkout(workout);
    hashHistory.push("/dashboard");

  },

  handleCancel(event) {
    event.preventDefault();
    hashHistory.push("/dashboard");
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  workoutTypeUpdate(e) {

      let el = e.target;
      this.setState({workout_type: el.options[el.selectedIndex].value});

  },

  dropDownSelected (stateVar, option) {
    if (stateVar === option) {
      return "selected";
    }
  },

  workoutFormType() {
    const workoutOptions = ["run", "walk", "hike", "gym", "other"];
    return(
      <label for="workout_type">Workout Type <br />
        <select id="workout_type" onChange={this.workoutTypeUpdate} value="run">
          <option value="run">
            run
          </option>

          <option value="walk">
            walk
          </option>

          <option value="hike">
            hike
          </option>

          <option value="gym">
            gym
          </option>

          <option value="other">
            other
          </option>
        </select>
      </label>

    );
  },

  render () {

    return(
      <div className="form-container">

      <div className="create-workout-container">
      <form onSubmit={this.handleSubmit}>
           <h3>Log a workout</h3>


        <label for="title">
          <input id="title" type="text"
            value={this.state.title}
            onChange={this.update("title")}
            required
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
        {this.workoutFormType()}


                <br />
        <label for="calories">
          <input id="calories" type="text"
            value={this.state.calories}
            onChange={this.update("calories")}
            placeholder="calories" />
        </label>

                <br />
        <label for="distance">
          <input id="distance" type="text"
            value={this.state.distance}
            onChange={this.update("distance")}
            placeholder="distance" />
        </label>

                <br />
        <label for="date">
          <input id="date" type="date"
            value={this.state.date}
            onChange={this.update("date")}
            required
            placeholder="date" />
        </label>

                <br />
                        <br />
        <label for="run_route_id">
          <input id="run_route_id" type="text"
            value={this.state.run_route_id}
            onChange={this.update("run_route_id")}
            placeholder="Pick your route" />
        </label>
                <br />
        <input type="submit" className="submit" value="Save Workout" />

        <button onClick={this.handleCancel}>Cancel</button>

      </form>
    </div>
  </div>

    );

  }

});

module.exports = WorkoutForm;
