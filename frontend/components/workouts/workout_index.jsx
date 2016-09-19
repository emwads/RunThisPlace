import React from 'react';
import WorkoutIndexItem from './workout_index_item';
import { Link } from 'react-router';


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
