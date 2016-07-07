const CommentStore = require('../stores/comment_store');

const CommentApiUtil = {
  fetchAllComments(cb){
    $.ajax({
      url: 'api/comments',
      success: cb
    });
  },

  createComment (data, cb) {
    $.ajax({
      url: 'api/comments',
      type: 'POST',
      data: data,
      success: cb
    });
  },

  deleteComment (id, cb) {
    $.ajax({
      url: `api/comments/${id}`,
      type: "DELETE",
      success (comment) {
        cb(comment);
      }
    });
  }

};

module.exports = CommentApiUtil;
