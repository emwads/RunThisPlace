
const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const ErrorActions = require('../actions/error_actions');
const hashHistory = require('react-router').hashHistory;


const LoginForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return {
      username: "",
      password: "",
      email: ""
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
    ErrorActions.clearErrors();
		e.preventDefault();


		const formData = {
			username: this.state.username,
			password: this.state.password,
      email: this.state.email,
      name: this.state.name
		};


    window.setTimeout( () => {
    if (this.props.location.pathname === "/login") {
      SessionActions.login(formData);
    } else {
      SessionActions.signup(formData);
    }}, 1000);
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

  fillInGuest(){
    this.setState({username: "guest"});
    this.setState({password: "password"});

  },

	render() {

    let navLink;
    let submitButton;
    let guestButton="";
    let emailField="";
    let nameField="";
    if (this.formType() === "login") {
      navLink = <div className="alt-login-link">Already have an account? <Link to="/signup">signup</Link></div>;
      submitButton = <input type="submit" className="submit" value="Log In" />;
      guestButton = <input type="submit" onClick={this.fillInGuest} className="guest" value="Log in as Guest" />;
    } else {
      navLink = <div className="alt-login-link">Want to create an account? <Link to="/login">login</Link></div>;
      submitButton = <input type="submit" className="submit" value="Sign Up" />;
      emailField = (<label for="email">
          <input id="email" type="email"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="email"  required/>
          { this.fieldErrors("email") }
        </label>);
      nameField = (<label for="name">
          <input id="name" type="name"
            value={this.state.name}
            onChange={this.update("name")}
            placeholder="name"  required/>
          { this.fieldErrors("name") }
        </label>);

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
              required
              placeholder="username" />
            { this.fieldErrors("username") }
          </label>

  				<label for="password">
            <input id="password" type="password"
              value={this.state.password}
              onChange={this.update("password")}
              required
              placeholder="password" />
            { this.fieldErrors("password") }
  				</label>

          {nameField}
          {emailField}

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
