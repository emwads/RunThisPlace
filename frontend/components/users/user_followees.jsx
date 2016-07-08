const React = require('react');
const Link = require('react-router').Link;
const UserActions = require('../../actions/user_actions');
const SessionStore = require('../../stores/session_store');


const UserFollowees = React.createClass({
  displayFollowed(){

    return SessionStore.currentUser().followers.map((follower) =>{
    return <img className="user-thumb" key={follower.name} src={follower.followee_pic} alt="profile picture" />;
  });
  },
  render () {
    return(

        <div className="followed-container">
          <h4>
            Followed Users:

          </h4>
          <div className="icon-panel">
            {this.displayFollowed()}

          </div>
          <Link to="/connect">
            <span className="buttonify grey-button">Follow more users
            </span>
          </Link>
        </div>
  );

  }

});

module.exports = UserFollowees;
