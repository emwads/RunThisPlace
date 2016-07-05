const React = require('react');
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store');


const UserDetail = React.createClass({
  getStateFromStore () {
    return {user: UserStore.find(parseInt(this.props.params.userId))};

  },
  getInitialState() {
    return this.getStateFromStore();
  },

  _usersChanged() {
    this.setState(this.getStateFromStore());
  },

  componentDidMount() {
    this.userListener = UserStore.addListener(this._usersChanged);
    UserActions.fetchSingleUser(parseInt(this.props.params.userId));
  },

  componentWillUnmount() {
    this.userListener.remove();
  },


  detailUser(){
    if (this.state.user !== undefined) {
      return (
        <div className="detail-description">
          <h2>{this.state.user.title}</h2>
          <span>description: {this.state.user.description}</span><br />
          <span>date: {this.state.user.date}</span><br />
          <span>distance: {this.state.user.distance}</span><br />
          <span>exercise type: {this.state.user.user_type}</span><br />
          <span>calories: {this.state.user.calories}</span><br />
          <figure>
            <img src={this.icons(this.state.user.user_type)} alt={this.state.user.user_type} />
          </figure>
        </div>
      );
    }
  },

  editUserButton(){
    if (this.state.user !== undefined) {
      return (
        <div className="detail-button">
          <button  onClick={ () => {
              hashHistory.push(`users/${this.props.params.userId}/edit`);
            } }>edit user</button>

        </div>
      );
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




  render () {



    return(
      <div className='solid-back'>
        <div className="user-detail-container">

          <figure>
            <img  className="user-profile-pic" src={SessionStore.currentUser().picture_url} />
          </figure>

          {this.editUserButton()}
          {this.toDashboardButton()}
        </div>
      </div>
    );

  }

});

module.exports = UserDetail;
