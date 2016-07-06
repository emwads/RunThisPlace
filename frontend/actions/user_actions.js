"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user_constants');
const UserApiUtil = require('../util/user_api_util');

const UserActions = {
  fetchAllUsers() {
    UserApiUtil.fetchAllUsers(UserActions.receiveAllUsers);

  },

  fetchSingleUser(id) {
    UserApiUtil.fetchSingleUser(id, UserActions.receiveSingleUser);
  },

  createUser(user){
    UserApiUtil.createUser({user: user}, UserActions.receiveSingleUser);

  },

  updateUser (user) {
    UserApiUtil.updateUser(user, this.receiveSingleUser);
  },

  deleteUser (id) {
    UserApiUtil.deleteUser(id, this.removeUser);
  },

  createFollow(follow){
    UserApiUtil.createFollow(follow, UserActions.receiveAllUsers);
  },

  deleteFollow(followeeId){
    UserApiUtil.deleteFollow(followeeId, UserActions.receiveAllUsers);
  },



  receiveAllUsers(users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  },
  receiveSingleUser(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },
  removeUser(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  }

};

module.exports = UserActions;
