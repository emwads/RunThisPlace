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
    runRoute['title'] = this.refs.title.value;
    runRoute['description'] =  this.refs.description.value;
    runRoute['map_info'] = JSON.stringify(this.state.mapPoints);
    runRoute['distance'] = this.state.distance;
    // runRoute['route_path'] = this.state.routePath;
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
            <input id="title" name="title" type="text"
              ref='title' required
              placeholder="title" />
          </label>

          <br />
          <label for="description">Description: <br />
            <textarea id="description" name="description"
              ref='description'
              placeholder="description"></textarea>
          </label>


        <br />
          <input type="submit" className="submit" value="Save Route" /> <br />



        </form>
        <button onClick={this.handleCancel}>Cancel</button>

        <button onClick={this.handleClear}>Clear Map Points</button>

      </div>



      <span>click on the map to move points</span>
      <div>
        <RouteFormMap onUpdate={this.childInitUpdate}
                      distance={this.state.distance}
                      mapPoints={this.state.mapPoints}/>
      </div>

      <h3>distance</h3>
      {this.state.distance}

    </div>

    );

  }

});

module.exports = RouteForm;
