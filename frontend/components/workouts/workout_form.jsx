const React = require('react');
const Link = require('react-router').Link;
const WorkoutActions = require('../../actions/workout_actions');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../stores/session_store');
const RouteStore = require('../../stores/run_route_store');
const RouteActions = require('../../actions/run_route_actions');
const ShowStaticMap = require('../runroutes/run_route_static_map');



const WorkoutForm = React.createClass({
  getInitialState() {
    return {
      description: "",
      title: "",
      calories: "",
      distance: "",
      date: "",
      run_route_id: "",
      runRoutes: RouteStore.all()
    };
  },

  _runRoutesChanged() {
    this.setState({runRoutes: RouteStore.all()});
  },


  componentDidMount() {
    this.routeListener = RouteStore.addListener(this._runRoutesChanged);
    RouteActions.fetchAllRunRoutes();
  },

  componentWillUnmount() {
    this.routeListener.remove();
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

  routeUpdate(e) {

    let el = e.target;
    let dist = this.state.runRoutes.find( (rr) => {
      return rr.id === parseInt(el.options[el.selectedIndex].value);
    }).distance;


    this.setState({ run_route_id: el.options[el.selectedIndex].value,
                    distance: dist});
  },

  displayRouteSelector (){

    if (this.state.runRoutes !== undefined) {
    return (
      <div className='il'>
      <label for="runRoute">Choose a save route: <br />
        <select  defaultValue="" ref="runRoute"  onChange={this.routeUpdate} >
          <option disabled value="">select a route</option>
        {this.state.runRoutes.map( (runRoute) => {
          return(<option value={runRoute.id} key={runRoute.id}>{runRoute.title}</option>);
        })}
        </select>
      </label>
    </div>

    );}
  },

  renderMap() {
    const self = this;
    if (this.state.runRoutes !== undefined && this.state.run_route_id !== undefined) {

      const routeInd = self.state.runRoutes.findIndex( (route) => {
        return route.id===parseInt(self.state.run_route_id);});

      if (routeInd >= 0){
        const route = this.state.runRoutes[routeInd];
        return (<div className="map-thumb-display">
          <Link to={`/runroutes/${this.state.run_route_id}`} >
          <ShowStaticMap routePath={route.route_path} />
          </Link>
        </div>);
      }
    }
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
            min="0" max="150" step="0.01"
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

      <div className='workout-form-row-last'>
        {this.workoutFormType()}
        {this.displayRouteSelector()}
        {this.renderMap()}

      </div>


        <div>
          <input type="submit" className="submit" value="Save Workout" />

          <button onClick={this.handleCancel}>Cancel</button>

        </div>

      </form>
    </div>
  </div>

    );

  }

});

module.exports = WorkoutForm;
