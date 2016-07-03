const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const Link = require('react-router').Link;



const App = React.createClass({
  _handleLogout(){
    SessionActions.logout();
  },

  greeting() {
    if (SessionStore.isUserLoggedIn()) {

    	return (
    		<div>
    			<span>welcome, {SessionStore.currentUser().username}!</span>
          <br />
    			<input type="submit" className="logout-button" value="logout" onClick={ this._handleLogout } />
    		</div>
    	);
    } else if ( !["/login", "/signup"].includes(this.props.location.pathname) ) {
      return (
        <div>
          <Link to="/login" activeClassName="current">Login</Link>
        </div>
      );
    }
  },

  logoLink() {
    if (SessionStore.isUserLoggedIn()) {
      return (<Link to="/dashboard">run this place</Link>);
    } else {
      return (<Link to="/">run this place</Link>);
    }
  },

  render() {
    return (
      <div>
        <header>

          <nav>
            <div className="nav">
              <h1 className="logo">{ this.logoLink() }</h1>
              <ul className="nav-links">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/workouts">Workouts</Link></li>
                <li><Link to="/runroutes">Routes</Link></li>
              </ul>
              <div className="nav-dropdown">{ this.greeting() }</div>
            </div>
          </nav>
        </header>
        <div className='main'>


          {this.props.children}

        </div>
      </div>
    );
  }

});

module.exports = App;
