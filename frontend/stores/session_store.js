const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');

let _currentUser = {};

const SessionStore = new Store(AppDispatcher);

SessionStore.currentUser = function () {
  return Object.assign({}, _currentUser);
};

SessionStore.isUserLoggedIn = function () {
  return !!(_currentUser.id);
};


SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      this.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _logout();
      this.__emitChange();
      break;
  }
};

const _login = function (currentUser) {
  _currentUser = currentUser;

};

const _logout = function () {
  _currentUser = {};
};


module.exports = SessionStore;
