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
    			<span>welocome, {SessionStore.currentUser().username}!</span>
          <br />
    			<input type="submit" value="logout" onClick={ this._handleLogout } />
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

  render() {
    return (
      <div>
        <header>

          <nav>
            <div className="nav">
              <h1 className="logo"><a href="#">runthisplace</a></h1>
              <ul className="nav-links">
                <li><a href="#">Workouts</a></li>
                <li><a href="#">Routes</a></li>
                <li className="nav-dropdown">{ this.greeting() }</li>
              </ul>
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
