const WorkoutStore = require('../stores/workout_store');

const WorkoutApiUtil = {
  fetchAllWorkouts(cb){
    $.ajax({
      url: 'api/workouts',
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
  }

};

module.exports = WorkoutApiUtil;
