const React = require('react');
const Link = require('react-router').Link;


const RunRouteIndexItem = React.createClass({
  render () {

    return(
      <div className="dash-list">

        <h3><Link to={`/runroutes/${this.props.runroute.id}`} >{this.props.runroute.title}</Link></h3>
        <span>description: {this.props.runroute.description}</span><br />
        <span>map info: {this.props.runroute.map_info}</span><br />

      </div>
    );

  }

});

module.exports = RunRouteIndexItem;
