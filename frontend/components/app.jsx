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
        <div className="nav-user-container">

          <div class="dropbtn">
            <Link to="/profile">
              <img className="user-thumb" src={SessionStore.currentUser().picture_url} />
              <span>{SessionStore.currentUser().name}</span>
            </Link>
          </div>
          <ul className="nav-dropdown-content" >
            <Link to="/profile"><li>Profile</li></Link>
            <li onClick={ this._handleLogout }>Logout</li>
          </ul>
        </div>
    	);
    } else if ( !["/login", "/signup"].includes(this.props.location.pathname) ) {
      return (
        <div className="nav-login-container">
          <Link to="/login" activeClassName="current">Login</Link>
          <Link to="/signup" className="buttonify">SignUp</Link>

        </div>
      );
    }
  },

  logoLink() {
    if (SessionStore.isUserLoggedIn()) {
      return (<Link to="/dashboard">
        <figure className="logo">
          <img src="https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,h_40/v1467917588/logo_j8beyk.png" />
        </figure>
        </Link>);
    } else {
      return (<Link to="/">
          <figure className="logo">
            <img src="https://res.cloudinary.com/dznf6puuv/image/upload/c_scale,h_40/v1467917588/logo_j8beyk.png" />
          </figure>
        </Link>);
    }
  },

  render() {
    return (
      <div>
        <header>

          <nav>
            <div className="nav">
              {this.logoLink()}
              <ul className="nav-links">
                <li><Link to="/workouts">Workouts</Link></li>
                <li><Link to="/runroutes">Routes</Link></li>
                <li><Link to="/connect">Connect</Link></li>
              </ul>
                { this.greeting() }

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
