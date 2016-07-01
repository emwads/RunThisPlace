const React = require('react');
const Link = require('react-router').Link;
const WorkoutStore = require('../stores/workout_store');
const WorkoutActions = require('../actions/workout_actions');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store');


const WorkoutEditForm = React.createClass({

  _workoutsChanged() {
    let workout =  WorkoutStore.find(parseInt(this.props.params.workoutId));
    this.setState({
      title: workout.title,
      workout_type: workout.workout_type,
      description: workout.description || "",
      calories: workout.calories || "",
      distance: workout.distance || "",
      date: workout.date,
      run_route_id: workout.run_route_id || ""
    });
  },

  componentDidMount() {
    this.workoutListener = WorkoutStore.addListener(this._workoutsChanged);
    WorkoutActions.fetchSingleWorkout(parseInt(this.props.params.workoutId));
  },

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

  componentWillUnmount() {
    this.workoutListener.remove();
  },

  handleSubmit(event) {
    event.preventDefault();
    const workout = Object.assign({}, this.state);
    workout["user_id"]=SessionStore.currentUser().id;
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
      <label for="workout_type">Workout Type
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
      <div className="create-workout-container">
      <form onSubmit={this.handleSubmit}>
           <h3>Edit workout</h3>


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
        <input type="submit" className="submit" value="Save Workout" /> <br />

        <button onClick={this.handleCancel}>Cancel</button>

      </form>
    </div>

    );

  }

});

module.exports = WorkoutEditForm;
