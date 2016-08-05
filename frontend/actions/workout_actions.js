"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const WorkoutConstants = require('../constants/workout_constants');
const WorkoutApiUtil = require('../util/workout_api_util');

const WorkoutActions = {
  fetchAllWorkouts(feed) {
    WorkoutApiUtil.fetchAllWorkouts(WorkoutActions.receiveAllWorkouts, feed);

  },

  fetchSingleWorkout(id) {
    WorkoutApiUtil.fetchSingleWorkout(id, WorkoutActions.receiveSingleWorkout);
  },

  createWorkout(workout){
    WorkoutApiUtil.createWorkout({workout: workout}, WorkoutActions.receiveSingleWorkout);

  },

  updateWorkout (workout) {
    WorkoutApiUtil.updateWorkout(workout, this.receiveSingleWorkout);
  },

  deleteWorkout (id) {
    WorkoutApiUtil.deleteWorkout(id, this.removeWorkout);
  },


  createComment(comment){
    WorkoutApiUtil.createComment({comment: comment}, WorkoutActions.receiveSingleWorkout);
  },

  deleteComment (id) {
    WorkoutApiUtil.deleteComment(id, WorkoutActions.receiveSingleWorkout);
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
