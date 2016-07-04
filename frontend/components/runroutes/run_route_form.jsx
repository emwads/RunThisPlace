const React = require('react');
const Link = require('react-router').Link;
const RouteActions = require('../../actions/run_route_actions');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../stores/session_store');
const RouteFormMap = require('./route_form_map');

const RouteForm = React.createClass({
  getInitialState() {
    return {
      description: "",
      title: "",
      mapPoints: [],
      runRoute: {},
      distance: 0
    };
  },

  handleSubmit(event) {
    debugger;
    event.preventDefault();
    const runRoute = Object.assign({}, this.state);
    // RouteActions.createRoute(runRoute);
    // hashHistory.push("/dashboard");

  },

  handleCancel(event) {
    event.preventDefault();
    hashHistory.push("/dashboard");
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },



  handleUpdate(points) {
    this.forceUpdate();
  },

  handleClear() {
    event.preventDefault();
    this.setState({mapPoints: []});
    this.forceUpdate();

  },

  childInitUpdate(key, val) {
    this.setState({
        [key]: val
    });

  },

  render () {

    return(
      <div>
        <div className="create-runroute-container">
        <form onSubmit={this.handleSubmit}>
             <h3>Create a Route</h3>


          <label for="title">
            <input id="title" type="text"
              value={this.state.title}
              onChange={this.update("title")}
              placeholder="title" />
          </label>

          <br />
          <label for="description">Description: <br />
            <textarea id="description"
              value={this.state.description}
              onChange={this.update("description")}
              placeholder="description"></textarea>
          </label>


        <br />
          <input type="submit" className="submit" value="Save Route" /> <br />



        </form>
        <button onClick={this.handleCancel}>Cancel</button>

        <button onClick={this.handleClear}>Clear Map Points</button>

      </div>



      <div>
        <RouteFormMap startUpdate={this.handleUpdate}
                      onUpdate={this.childInitUpdate}
                      route={this.state.runRoute}
                      mapPoints={this.state.mapPoints}/>
      </div>
      
      <h3>distance</h3>
      <div id='total'></div>

      <h3>route info</h3>
      <div id="routeInfo"></div>



    </div>

    );

  }

});

module.exports = RouteForm;
