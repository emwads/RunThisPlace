"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const CommentConstants = require('../constants/comment_constants');
const CommentApiUtil = require('../util/comment_api_util');

const CommentActions = {
  fetchAllComments() {
    CommentApiUtil.fetchAllComments(CommentActions.receiveAllComments);

  },



  createComment(comment){
    CommentApiUtil.createComment({comment: comment}, CommentActions.receiveSingleComment);

  },

  deleteComment (id) {
    CommentApiUtil.deleteComment(id, this.removeComment);
  },


  receiveAllComments(comments) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      comments: comments
    });
  },
  receiveSingleComment(comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    });
  },
  removeComment(comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    });
  }

};

module.exports = CommentActions;
