
const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const hashHistory = require('react-router').hashHistory;


const LoginForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return {
      username: "",
      password: ""
    };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push("/dashboard");
    }
  },

	handleSubmit(e) {
		e.preventDefault();

		const formData = {
			username: this.state.username,
			password: this.state.password
		};

    if (this.props.location.pathname === "/login") {
      SessionActions.login(formData);
    } else {
      SessionActions.signup(formData);
    }
	},

  fieldErrors(field) {
    const errors = ErrorStore.formErrors(this.formType());

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType() {
    return this.props.location.pathname.slice(1);
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },

  fillInGuest(e){
    this.setState({username: "guest"});
    this.setState({password: "password"});
    // e.preventDefault();

  },

	render() {

    let navLink;
    let submitButton;
    let guestButton="";
    if (this.formType() === "login") {
      navLink = <div className="alt-login-link">Already have an account? <Link to="/signup">signup</Link></div>;
      submitButton = <input type="submit" className="submit" value="Log In" />;
      guestButton = <input type="submit" onClick={this.fillInGuest} className="guest" value="Log in as Guest" />;
    } else {
      navLink = <div className="alt-login-link">Want to create an account? <Link to="/login">login</Link></div>;
      submitButton = <input type="submit" className="submit" value="Sign Up" />;

    }

		return (
      <div className="main-container">
        <div className="login-box">
  			<form onSubmit={this.handleSubmit}>
             <h3>{ this.formType().replace(/\b[a-z]/g,function(f){return f.toUpperCase();}) }</h3>


  				<label for="username">
  					<input id="username" type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="username" />
            { this.fieldErrors("username") }
          </label>

  				<label for="password">
            <input id="password" type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="password" />
            { this.fieldErrors("password") }
  				</label>

          { this.fieldErrors("base") }

  				{submitButton}

          {guestButton}

          { navLink }
  			</form>
      </div>
    </div>
		);
	}
});

module.exports = LoginForm;
