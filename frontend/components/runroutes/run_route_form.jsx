const React = require('react');
const Link = require('react-router').Link;
const RouteActions = require('../../actions/run_route_actions');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../stores/session_store');
const RouteFormMap = require('./route_form_map');
const FormRender = require('./form_render');

const RouteForm = React.createClass({
  getInitialState() {
    return {
      description: "",
      title: "",
      mapPoints: []
    };
  },

  handleSubmit(event) {
    event.preventDefault();
    const runRoute = Object.assign({}, this.state);
    RouteActions.createRoute(runRoute);
    hashHistory.push("/dashboard");

  },

  handleCancel(event) {
    event.preventDefault();
    hashHistory.push("/dashboard");
  },
  //
  // update(property) {
  //   return (e) => this.setState({[property]: e.target.value});
  // },



  handleUpdate(points) {
    // this.setState({mapPoints: points});
    console.log(this.state.mapPoints);
    this.forceUpdate();
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

          <button onClick={this.handleCancel}>Cancel</button>

        </form>

      </div>
      <div>

        <RouteFormMap event={this.handleUpdate} mapPoints={this.state.mapPoints}/>



      </div>
      <FormRender mapPoints={this.state.mapPoints}  />

    </div>

    );

  }

});

module.exports = RouteForm;
