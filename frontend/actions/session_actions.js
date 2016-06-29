const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const hashHistory = require('react-router').hashHistory;
const ErrorActions = require('./error_actions');

const SessionActions = {
  signup(formData){
    SessionApiUtil.signup(formData, this.receiveCurrentUser,
      ErrorActions.setErrors);
  },
  login(formData){
    SessionApiUtil.login(formData, this.receiveCurrentUser,
      ErrorActions.setErrors );
  },
  logout(){
    SessionApiUtil.logout(this.removeCurrentUser);
  },
  receiveCurrentUser(currentUser){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },

  removeCurrentUser() {
  AppDispatcher.dispatch({
    actionType: SessionConstants.LOGOUT
  });
  hashHistory.push("/login");
}

};


module.exports = SessionActions;
