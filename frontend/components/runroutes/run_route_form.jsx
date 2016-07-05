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
    event.preventDefault();
    let runRoute = {};
    runRoute['title'] = this.state.title;
    // debugger;
    runRoute['description'] = this.state.description;
    runRoute['map_info'] = JSON.stringify(this.state.mapPoints);
    runRoute['distance'] =this.state.distance;
    RouteActions.createRunRoute(runRoute);
    hashHistory.push("/dashboard");

  },

  handleCancel(event) {
    event.preventDefault();
    hashHistory.push("/dashboard");
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
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
      <div className='form-container'>
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
        <RouteFormMap onUpdate={this.childInitUpdate}
                      distance={this.state.distance}
                      mapPoints={this.state.mapPoints}/>
      </div>

      <h3>distance</h3>
      {this.state.distance}


      <h3>route info</h3>
      <div id="routeInfo"></div>



    </div>

    );

  }

});

module.exports = RouteForm;
