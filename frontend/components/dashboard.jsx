const React = require('react');

const Dashboard = React.createClass({
  render () {

    return(
      <div>
        This is a dashboard

        {this.props.children}
      </div>
    );

  }

});

module.exports = Dashboard;
