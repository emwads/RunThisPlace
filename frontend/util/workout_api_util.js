const WorkoutStore = require('../stores/workout_store');

const WorkoutApiUtil = {
  fetchAllWorkouts(cb, feed){
    $.ajax({
      url: 'api/workouts',
      data: {feed: feed},
      success: cb
    });
  },
  fetchSingleWorkout (id, cb) {
    $.ajax({
      url: `api/workouts/${id}`,
      success: cb
    });
  },
  createWorkout (data, cb) {
    $.ajax({
      url: 'api/workouts',
      type: 'POST',
      data: data,
      success: cb
    });
  },
  updateWorkout (data, cb) {
    $.ajax({
      url: 'api/workouts',
      type: 'PATCH',
      data: data,
      success: cb
    });
  },
  deleteWorkout (id, cb) {
    $.ajax({
      url: `api/workouts/${id}`,
      type: "DELETE",
      success (workout) {
        cb(workout);
      }
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

module.exports = WorkoutApiUtil;
