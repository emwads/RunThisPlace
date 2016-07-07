const React = require('react');
const SessionStore = require('../stores/session_store');

const Welcome = React.createClass({

  render () {

    return(
      <div>
        <div className="main-container">
          <div className="welcome">
            <h1 className="welcome-message">Take control of your workouts</h1>
          </div>
        </div>
      <aside className="bottom-info">
        <div>
          <img src="https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,e_brightness:100,w_125/v1467917588/map-icon_w6z8mg.png" alt="map icon" />
          <h4>Track Your Runs   </h4>
          <p>Hey, not everyone has a perfect memory. No one's going to blame you for not remembering that route you took 2 years ago.</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,e_brightness:100,w_125/v1467917588/log-icon_xf5nmr.png" alt="log icon"/>
          <h4>
            Log Your Workouts
          </h4>
          <p>"Do you even lift?" "Yeah, bro, check out my porfile on run this place" <br /> -a real conversation somewhere</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,e_brightness:100,w_125/v1467917588/sharing-icon_lqvygr.png" alt="share icon" />
          <h4>
            Share Your Success
          </h4>
          <p>Whether they're your acquaintences or close friends, let them know you slayed it.</p>
        </div>
      </aside>

      </div>
    );

  }

});

module.exports = Welcome;
