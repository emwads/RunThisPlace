const React = require('react');
const Link = require('react-router').Link;


const WorkoutIndexItem = React.createClass({
  icons (type) {
    switch (type) {
      case "walk":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_100/v1467621146/walk-icon_h4lvnc.png';
      case "hike":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_100/v1467621454/noun_45242_cc_hkhvpf.png';
      case "run":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_100/v1467621146/run-icon_p1gdsf.png';
      case "gym":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_100/v1467621146/gym-icon_laruyg.png';
      case "other":
        return 'https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,w_100/v1467621146/other-icon_cj9ota.png';
    }
  },

  displayDistance () {
    let disp = "";

    if (this.props.workout.distance !== null) {
      disp = <li>distance: {this.props.workout.distance}</li>;
    }
    return disp;
  },

  displayCalories () {
    let disp = "";

    if (this.props.workout.calories !== null) {
      disp = <li>calories: {this.props.workout.calories}</li>;
    }
    return disp;
  },

  render () {

    return(
      <div className="dash-list cf">
        <figure>
          <img src={this.icons(this.props.workout.workout_type)} alt={this.props.workout.workout_type} />
        </figure>
        <h3><Link to={`/workouts/${this.props.workout.id}`} >{this.props.workout.title}</Link></h3>
        <div>
          <ul>
            <li>date: {this.props.workout.date}</li>
            {this.displayDistance()}
            <li>exercise type: {this.props.workout.workout_type}</li>
              {this.displayCalories()}
          </ul>
        </div>

      </div>
    );

  }

});

module.exports = WorkoutIndexItem;
