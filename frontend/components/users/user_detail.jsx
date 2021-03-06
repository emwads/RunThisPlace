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
          <button className="grey-button" onClick={ (e) => {
              e.preventDefault();
              self.setState({form: true});
            } }>Edit Profile</button>
        </div>
      );
    } else if (this.state.user !== undefined && this.state.form === true) {
      return (<div className="detail-button">
        <button className="grey-button" onClick={ (e) => {
            e.preventDefault();
            self.setState({form: false});
          } }>Cancel Edit</button>
      </div>);
    }
  },

  toDashboardButton(){
    return (
      <div className="detail-button">
        <button className="grey-button" onClick={ () => {
            hashHistory.push(`dashboard`);
          } }>Back Home</button>

      </div>
    );

  },

  updatePicture(pictureUrl) {
    console.log('hi');
  },

  displayForm(){
    if (this.state.form === true) {
      return <UserEditForm user={this.state.user} hideForm={this.hideForm}
                          pictureUpdate={this.state.updatePicture} />;
    }

  },

  hideForm() {
    this.setState({form: false});
  },

  displayPic () {
    if (this.state.user !== undefined) {
      return(<img  className="user-profile-pic" src={this.state.user.picture_url}/>);
    }
  },

  render () {



    return(
      <div className=''>
        <div className="user-detail-container">
          <h3>{SessionStore.currentUser().name}{`\'`}s Profile</h3>
          <figure>
            {this.displayPic()}
          </figure>

          {this.detailUser()}
          {this.toDashboardButton()}
          {this.editUserButton()}
        </div>

        <div>
          {this.displayForm()}
        </div>
      </div>
    );

  }

});

module.exports = UserDetail;
