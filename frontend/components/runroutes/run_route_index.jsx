const React = require('react');
const RunRouteIndexItem = require('./run_route_index_item');
const Link = require('react-router').Link;


const RunRouteIndex = React.createClass({
  displayRouteItem() {

    if ( this.props.runroutes !== undefined ) {
      return(this.props.runroutes.slice(0,4).map(function (runroute) {
          return (<RunRouteIndexItem key={runroute.id} runroute={runroute} />);
        })
      );
    }
  },

  render () {

    return(
      <div className="dash-route-container cf">
        <header className="dash-el-header">
          <h2>Recent Routes</h2><br />
            <Link to="/runroutes"><span className="buttonify grey-button"> All Routes</span></Link>

        </header>

        {this.displayRouteItem()}
      </div>
    );

  }

});

module.exports = RunRouteIndex;
