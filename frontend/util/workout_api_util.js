const WorkoutStore = require('../stores/workout_store');

const WorkoutApiUtil = {
  fetchAllWorkouts(cb){
    $.ajax({
      url: 'api/workouts',
      success: cb
    });
  },
  fetchSingleWorkouts (id, cb) {
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
  deletePost (id, cb) {
    $.ajax({
      url: `api/posts/${id}`,
      type: "DELETE",
      success (post) {
        cb(post);
      }
    });
  }

};

module.exports = WorkoutApiUtil;
