const SessionApiUtil ={
  signup(user, success, error) {
    $.ajax({
      type: "POST",
      url: 'api/user',
      data: {user: user},
      success: success,
      error(xhr) {
				const errors = xhr.responseJSON;

				error("signup", errors);
			}
    });
  },

  login(user, success, error) {
    $.ajax({
      type: "POST",
      url: 'api/session',
      data: {user: user},
      success: success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("login", errors);
      }
    });
  },
  logout(success) {
    $.ajax({
      method: "DELETE",
      url: 'api/session',
      success: success,
      error: function () {
        console.log("Logout error in SessionApiUtil#logout");
      }
    });
  }
};



module.exports = SessionApiUtil;
