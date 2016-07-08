const React = require('react');
const Link = require('react-router').Link;
const WorkoutActions = require('../../actions/workout_actions');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../stores/session_store');


const WorkoutForm = React.createClass({
  getInitialState() {
    return {
      description: "",
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
      workout_type: this.refs.workoutType.value,
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
      <div className='inline'>
      <label for="workout_type">Workout Type <br />
        <select id="workout_type" ref="workoutType">
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
      </div>

    );
  },

  render () {

    return(
      <div className="form-container">

      <div className="create-workout-container">
      <form onSubmit={this.handleSubmit}>
           <h3>Log a workout</h3>
           <br /> <br />

        <label for="title"> What you did<br />
          <input id="title" type="text"
            value={this.state.title}
            onChange={this.update("title")}
            required
            placeholder="title" />
        </label>

        <label for="date"> When you worked out<br />
          <input id="date" type="date"
            value={this.state.date}
            onChange={this.update("date")}
            required
            placeholder="date" />
        </label>
        <br />

        <label for="calories"> Calories <br />
          <input id="calories" type="number"
            min="0" max="10000" step="1"
            value={this.state.calories}
            onChange={this.update("calories")}
            placeholder="calories" />
        </label>

        <label for="distance">distance <br />
          <input id="distance" type="number"
            min="0" max="150" step="0.1"
            value={this.state.distance}
            onChange={this.update("distance")}
            placeholder="distance" />
        </label>

        <br />
        <label for="description">Describe your workout<br />
        <textarea id="description"
          value={this.state.description}
          onChange={this.update("description")}
          placeholder="Description"></textarea>
      </label>

      <br />
        {this.workoutFormType()}

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
