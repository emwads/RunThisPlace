const React = require('react');
const WorkoutIndexItem = require('./workout_index_item');
const Link = require('react-router').Link;


const WorkoutIndex = React.createClass({
  render () {

    return(
      <div className="dash-el-container">
        <header className="dash-el-header">
          <h2>Recent Workouts</h2>
          <Link to="/workouts"><span className="buttonify grey-button"> All Workouts</span></Link>
        </header>

        {this.props.workouts.slice(0,3).map(function (workout) {
            return (<WorkoutIndexItem key={workout.id}
                                      showComments={false}
                                      workout={workout} />);
          })}
      </div>
    );

  }

});

module.exports = WorkoutIndex;
