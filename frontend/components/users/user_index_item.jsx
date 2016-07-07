const React = require('react');
const Link = require('react-router').Link;
const UserActions = require('../../actions/user_actions');
const SessionStore = require('../../stores/session_store');


const UserIndexItem = React.createClass({

  createFollow(e) {
    let follow = {follow: {
      follower_id: SessionStore.currentUser().id,
      followee_id: this.props.user.id
    } };
    UserActions.createFollow(follow);

  },


  followUserButton(){
    const self = this;

    if (this.props.user !== undefined && this.props.user.following === false) {
      return (
        <div >
          <button className="unfollowed" onClick={ () => {
              self.createFollow();
            }} >
            + Follow
          </button>
        </div>
      );
    } else if (this.props.user !== undefined && this.props.user.following === true) {
      return (
        <div>
          <button className="followed" onClick={ () => {
              UserActions.deleteFollow(self.props.user.id);
            } }>
            Following
          </button>
        </div>);
    }
  },

  render () {
    return(
      <div className="connect-user-listing">
        <figure>
          <img className="user-profile-pic" src={this.props.user.picture_url} alt="profile picture" />
        </figure>
        <div>

          {this.props.user.username}
          <br />
          {this.followUserButton()}

        </div>

      </div>    );

  }

});

module.exports = UserIndexItem;
