
const React = require('react');
const UserActions = require('../../actions/user_actions');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../stores/session_store');



const UserEditForm = React.createClass({

  handleSubmit(event) {
    event.preventDefault();
    const userData = {user: {name: this.refs.name.value,
                      email: this.refs.email.value,
                      picture_url: this.refs.picture_url.value,
                      birthdate: this.refs.birthdate.value,
                      weight: this.refs.weight.value,
                      height: this.refs.height.value}};

    UserActions.updateUser(userData);
    this.props.hideForm();

  },

  render () {

    return(
      <div className="form-container">
      <form onSubmit={this.handleSubmit}>
           <h3>Edit Profile</h3>

        <br />
        <label for="name">
          <input id="name" type="text"
            defaultValue={this.props.user.name}
            ref="name"
            placeholder="name" />
        </label>


        <br />
        <label for="email">
          <input id="email" type="email"
            defaultValue={this.props.user.email}
            ref="email"
            placeholder="email" />
        </label>


        <br />
        <label for="picture_url">
          <input id="picture_url" type="text"
            defaultValue={this.props.user.picture_url}
            ref="picture_url"
            placeholder="picture_url" />
        </label>

        <br />
        <label for="height">
          <input id="height" type="number"
            defaultValue={this.props.user.height}
            ref="height"
            min="1" max="80" step="1" />
        </label>

        <br />
        <label for="weight">
          <input id="weight" type="number"
            defaultValue={this.props.user.weight}
            ref="weight"
            min="1" max="500" step="0.1" />
        </label>

        <br />
        <label for="birthdate">
          <input id="birthdate" type="date"
            defaultValue={this.props.user.birthdate}
            ref="birthdate" />
        </label>
        <br />

        <input type="submit" className="submit" value="Save User" /> <br />


      </form>
    </div>

    );

  }

});

module.exports = UserEditForm;
