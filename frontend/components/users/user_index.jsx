const React = require('react');
const UserStore = require('../../stores/user_store');
const UserActions = require('../../actions/user_actions');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../stores/session_store');
const UserIndexItem = require('./user_index_item');

const UserIndex = React.createClass({
  getStateFromStore () {
    return {users: UserStore.all()};
  },

  getInitialState() {
    return {users: []};
  },

  _usersChanged() {
    this.setState(this.getStateFromStore());
  },

  componentDidMount() {
    this.userListener = UserStore.addListener(this._usersChanged);
    UserActions.fetchAllUsers();
  },

  componentWillUnmount() {
    this.userListener.remove();
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

  // displayUsers () {
  //   if (this.state.users) {
  //
  //   }
  // },


  render () {
    return(
      <div className=''>
        <div className="user-detail-container">
          <h3>Connect to Friends</h3>
          {this.toDashboardButton()}
        </div>
        {this.state.users.map((user) => {
          return (<UserIndexItem user={user} key={user.id}/>);
        })}


      </div>
    );

  }

});

module.exports = UserIndex;
