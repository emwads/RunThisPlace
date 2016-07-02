const RunRouteStore = require('../stores/workout_store');

const RunRouteApiUtil = {
  fetchAllRunRoutes(cb){
    $.ajax({
      url: 'api/run_routes',
      success: cb
    });
  },
  fetchSingleRunRoute (id, cb) {
    $.ajax({
      url: `api/run_routes/${id}`,
      success: cb
    });
  },
  createRunRoute (data, cb) {
    $.ajax({
      url: 'api/run_routes',
      type: 'POST',
      data: data,
      success: cb
    });
  },
  updateRunRoute (data, cb) {
    $.ajax({
      url: 'api/run_routes',
      type: 'PATCH',
      data: data,
      success: cb
    });
  },
  deleteRunRoute (id, cb) {
    $.ajax({
      url: `api/run_routes/${id}`,
      type: "DELETE",
      success (workout) {
        cb(workout);
      }
    });
  }

};

module.exports = RunRouteApiUtil;
