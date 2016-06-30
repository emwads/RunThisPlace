"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const WorkoutConstants = require('../constants/workout_constants');
const WorkoutApiUtil = require('../util/workout_api_util');

const WorkoutActions = {
  fetchAllWorkouts() {
    WorkoutApiUtil.fetchAllWorkouts(WorkoutActions.receiveAllWorkouts);

  },

  fetchSingleWorkout() {
    WorkoutApiUtil.fetchSingleWorkouts(WorkoutActions.receiveAllWorkouts);
  },

  createWorkout(workout){
    WorkoutApiUtil.createWorkout(WorkoutActions.receiveSingleWorkout);
  },

  updateWorkout (data) {
    WorkoutApiUtil.updateWorkout(data, this.receiveSingleWorkout);
  },

  deletePost (id) {
    WorkoutApiUtil.deleteWorkout(id, this.removeWorkout);
  },


  receiveAllWorkouts(workouts) {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.WORKOUTS_RECEIVED,
      workouts: workouts
    });
  },
  receiveSingleWorkout(workout) {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.WORKOUT_RECEIVED,
      workout: workout
    });
  },
  removeWorkout(workout) {
    AppDispatcher.dispatch({
      actionType: WorkoutConstants.WORKOUT_RECEIVED,
      workout: workout
    });
  }

};

module.exports = WorkoutActions;
