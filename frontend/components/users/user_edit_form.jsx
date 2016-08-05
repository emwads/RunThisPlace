
const React = require('react');
const UserActions = require('../../actions/user_actions');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../stores/session_store');
const UploadButton = require('./upload_button');


const UserEditForm = React.createClass({

  handleSubmit(event) {
    event.preventDefault();
    const userData = {user: {name: this.refs.name.value,
                      email: this.refs.email.value,
                      picture_url: this.state.picture_url,
                      birthdate: this.refs.birthdate.value,
                      weight: this.refs.weight.value,
                      height: this.refs.height.value}};

    UserActions.updateUser(userData);
    this.props.hideForm();

  },
  getInitialState() {
    return({picture_url: this.props.user.picture_url})
  },
  componentDidMount () {
      this.uploadedImg = false;
  },

  displayImage() {
    if (this.uploadedImg) {
      return (<figure><img src={this.state.picture_url} alt="uploaded picture" /></figure> )
    }
  },

  updateImage (image) {
    this.uploadedImg=true;
    this.setState({picture_url: image.url});
  },

  render () {

    return(
      <div className="form-container">
      <form onSubmit={this.handleSubmit}>
           <h3>Edit Profile</h3>

        <br />
        <label htmlFor="name">
          <input id="name" type="text"
            defaultValue={this.props.user.name}
            ref="name"
            placeholder="name" />
        </label>


        <br />
        <label htmlFor="email">
          <input id="email" type="email"
            defaultValue={this.props.user.email}
            ref="email"
            placeholder="email" />
        </label>


        <UploadButton postImage={this.updateImage} />
        {this.displayImage()}


        <br />
        <label htmlFor="height">
          <input id="height" type="number"
            defaultValue={this.props.user.height}
            ref="height"
            min="1" max="80" step="1" />
        </label>

        <br />
        <label htmlFor="weight">
          <input id="weight" type="number"
            defaultValue={this.props.user.weight}
            ref="weight"
            min="1" max="500" step="0.1" />
        </label>

        <br />
        <label htmlFor="birthdate">
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
