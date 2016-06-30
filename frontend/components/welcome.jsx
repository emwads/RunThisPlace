const React = require('react');
const SessionStore = require('../stores/session_store');

const Welcome = React.createClass({
  greeting() {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <div>
          <span>welocome, {SessionStore.currentUser().username}!</span>
          <br />
          <input type="submit" value="logout" onClick={ this._handleLogout } />
        </div>
      );
    } else if ( !["/login", "/signup"].includes(this.props.location.pathname) ) {
      return (
        <div>
          <Link to="/login" activeClassName="current">Login</Link> 
          <Link to="/signup" activeClassName="current">Sign up!</Link>
        </div>
      );
    }
  },
  render () {

    return(
      <div className="main-container">
        <div className="welcome">
          <h1 className="welcome-message">Take control of your workouts</h1>
        </div>
      </div>
    );

  }

});

module.exports = Welcome;
