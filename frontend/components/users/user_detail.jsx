const React = require('react');
const UserStore = require('../../stores/user_store');
const UserActions = require('../../actions/user_actions');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../stores/session_store');
const UserEditForm = require('./user_edit_form');

const UserDetail = React.createClass({
  getStateFromStore () {
    return {user: UserStore.find(SessionStore.currentUser().id), form:false};

  },
  getInitialState() {
    return this.getStateFromStore();
  },

  _usersChanged() {
    this.setState(this.getStateFromStore());
  },

  componentDidMount() {
    this.userListener = UserStore.addListener(this._usersChanged);
    UserActions.fetchSingleUser(SessionStore.currentUser().id);
  },

  componentWillUnmount() {
    this.userListener.remove();
  },


  detailUser(){
    if (this.state.user !== undefined) {
      return (
        <div className="detail-description">
          <span>Username: {this.state.user.username}</span><br />
          <span>Birthdate: {this.state.user.birthdate}</span><br />
          <span>Weight: {this.state.user.weight} lb</span><br />
          <span>Height: {this.state.user.height} in</span><br />
          <span>email: {this.state.user.email}</span><br />
        </div>
      );
    }
  },

  editUserButton(){
    const self = this;
    if (this.state.user !== undefined && this.state.form === false) {
      return (
        <div className="detail-button">
          <button  onClick={ (e) => {
              e.preventDefault();
              self.setState({form: true});
            } }>Edit Profile</button>
        </div>
      );
    } else if (this.state.user !== undefined && this.state.form === true) {
      return (<div className="detail-button">
        <button  onClick={ (e) => {
            e.preventDefault();
            self.setState({form: false});
          } }>Cancel Edit</button>
      </div>);
    }
  },

  toDashboardButton(){
    return (
      <div className="detail-button">
        <button onClick={ () => {
            hashHistory.push(`dashboard`);
          } }>Back Home</button>

      </div>
    );

  },

  displayForm(){
    if (this.state.form === true) {
      return <UserEditForm user={this.state.user} hideForm={this.hideForm} />;
    }

  },

  hideForm() {
    this.setState({form: false});
  },



  render () {



    return(
      <div className='solid-back'>
        <div className="user-detail-container">
          <h3>{SessionStore.currentUser().name}{`\'`}s Profile</h3>
          <figure>
            <img  className="user-profile-pic" src={SessionStore.currentUser().picture_url} />
          </figure>

          {this.detailUser()}
          {this.editUserButton()}
          {this.toDashboardButton()}
        </div>

        <div>
          {this.displayForm()}
        </div>
      </div>
    );

  }

});

module.exports = UserDetail;
