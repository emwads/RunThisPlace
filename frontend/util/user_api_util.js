
const UserStore = require('../stores/user_store');

const UserApiUtil = {

  updateUser (data, cb) {
    $.ajax({
      url: 'api/user/',
      type: 'PATCH',
      data: data,
      success: cb
    });
  },

  fetchAllUsers(cb){
    $.ajax({
      url: 'api/users',
      success: cb
    });
  },

  fetchSingleUser (id, cb) {
    $.ajax({
      url: `api/users/${id}`,
      success: cb
    });
  }


};

module.exports = UserApiUtil;
