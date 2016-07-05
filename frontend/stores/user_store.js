const Store = require('flux/utils').Store;
const UserConstants = require('../constants/user_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const UserStore = new Store(AppDispatcher);

let _users = {};

const resetUsers = function (users) {
  _users = {};

  users.forEach(function (user) {
    _users[user.id] = user;
  });
};

const setUser = function (user) {
  _users[user.id] = user;
};

UserStore.all = function () {
  return Object.keys(_users).map(function (userId) {
    return _users[userId];
  });
};

UserStore.find = function (id) {
  return _users[id];
};


UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.USERS_RECEIVED:
      resetUsers(payload.users);
      this.__emitChange();
      break;

    case UserConstants.USER_RECEIVED:
      setUser(payload.user);
      this.__emitChange();
      break;

  }
};

module.exports = UserStore;
