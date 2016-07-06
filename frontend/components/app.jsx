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
    		<div className="nav-user">
          <div>
            <figure>
              <Link to="/profile"><img  className="user-thumb" src={SessionStore.currentUser().picture_url} /></Link>
            </figure>
          </div>
          <div>
      			<span>{SessionStore.currentUser().name}</span>
            <br />
      			<input type="submit" className="logout-button" value="logout" onClick={ this._handleLogout } />
          </div>
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
                <li><Link to="/dashboard">Workouts</Link></li>
                <li><Link to="/dashboard">Routes</Link></li>
                <li><Link to="/dashboard">Connect</Link></li>
              </ul>
              <div className="nav-user-container">{ this.greeting() }</div>
            </div>
          </nav>
        </header>
        <div className='main cf'>

          {this.props.children}

        </div>
        <footer>
          <nav>
            <div className="footer-nav">

              <ul className="nav-links">
                <li><Link to="#">Support</Link> | </li>
                <li><Link to="#">Privacy</Link> | </li>
                <li><Link to="#">Terms of Use</Link> </li>
              </ul>

            </div>
          </nav>
        </footer>
      </div>
    );
  }

});

module.exports = App;
