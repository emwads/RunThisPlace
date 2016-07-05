
const UserStore = require('../stores/user_store');

const UserApiUtil = {

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
  },

  updateUser (data, cb) {
    $.ajax({
      url: 'api/users',
      type: 'PATCH',
      data: data,
      success: cb
    });
  }


};

module.exports = UserApiUtil;
