"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const RunRouteConstants = require('../constants/run_route_constants');
const RunRouteApiUtil = require('../util/run_route_api_util');

const RunRouteActions = {
  fetchAllRunRoutes() {
    RunRouteApiUtil.fetchAllRunRoutes(RunRouteActions.receiveAllRunRoutes);

  },

  fetchSingleRunRoute(id) {
    RunRouteApiUtil.fetchSingleRunRoute(id, RunRouteActions.receiveSingleRunRoute);
  },

  createRunRoute(runroute){
    RunRouteApiUtil.createRunRoute({runroute: runroute}, RunRouteActions.receiveSingleRunRoute);

  },

  deleteRunRoute (id) {
    RunRouteApiUtil.deleteRunRoute(id, this.removeRunRoute);
  },


  receiveAllRunRoutes(runroutes) {
    AppDispatcher.dispatch({
      actionType: RunRouteConstants.RUNROUTES_RECEIVED,
      runroutes: runroutes
    });
  },
  receiveSingleRunRoute(runroute) {
    AppDispatcher.dispatch({
      actionType: RunRouteConstants.RUNROUTE_RECEIVED,
      runroute: runroute
    });
  },
  removeRunRoute(runroute) {
    AppDispatcher.dispatch({
      actionType: RunRouteConstants.RUNROUTE_RECEIVED,
      runroute: runroute
    });
  }

};

module.exports = RunRouteActions;
