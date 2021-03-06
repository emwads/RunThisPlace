const Store = require('flux/utils').Store;
const WorkoutConstants = require('../constants/workout_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const WorkoutStore = new Store(AppDispatcher);

let _workouts = {};

const resetWorkouts = function (workouts) {
  _workouts = {};

  workouts.forEach(function (workout) {
    _workouts[workout.id] = workout;
  });
};

const setWorkout = function (workout) {
  _workouts[workout.id] = workout;
};

const removeWorkout = function (workout) {
  delete _workouts[workout.id];
};

WorkoutStore.all = function () {
  const result = Object.keys(_workouts).map(function (workoutId) {
    return _workouts[workoutId];
  });

  return result.sort(sortWorkouts);

};

WorkoutStore.find = function (id) {
  return _workouts[id];
};


WorkoutStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case WorkoutConstants.WORKOUTS_RECEIVED:
      resetWorkouts(payload.workouts);
      this.__emitChange();
      break;

    case WorkoutConstants.WORKOUT_RECEIVED:
      setWorkout(payload.workout);
      this.__emitChange();
      break;

    case WorkoutConstants.WORKOUT_REMOVED:
      removeWorkout(payload.workout);
      this.__emitChange();
      break;
  }
};



function sortWorkouts(a, b) {
    if (a.date > b.date) {
      return -1;
    } else if (a.date < b.date) {
      return 1;
    } else {
    return 0;
    }
  }

module.exports = WorkoutStore;
