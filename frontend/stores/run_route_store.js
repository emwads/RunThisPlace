const Store = require('flux/utils').Store;
const RunRouteConstants = require('../constants/run_route_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const RunRouteStore = new Store(AppDispatcher);

let _runroutes = {};

const resetRunRoutes = function (runroutes) {
  _runroutes = {};

  runroutes.forEach(function (runroute) {
    _runroutes[runroute.id] = runroute;
  });
};

const setRunRoute = function (runroute) {
  _runroutes[runroute.id] = runroute;
};

const removeRunRoute = function (runroute) {
  delete _runroutes[runroute.id];
};

RunRouteStore.all = function () {
  // console.log(_runroutes);
  let result = Object.keys(_runroutes).map(function (runrouteId) {
    return _runroutes[runrouteId];
  });
  // return result;
  // console.log(result);
  if (result.length >= 2) {
    return result.sort(sortRunRoutes);
  }
};

RunRouteStore.find = function (id) {
  return _runroutes[id];
};


RunRouteStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case RunRouteConstants.RUNROUTES_RECEIVED:
      resetRunRoutes(payload.runroutes);
      this.__emitChange();
      break;

    case RunRouteConstants.RUNROUTE_RECEIVED:
      setRunRoute(payload.runroute);
      this.__emitChange();
      break;

    case RunRouteConstants.RUNROUTE_REMOVED:
      removeRunRoute(payload.runroute);
      this.__emitChange();
      break;
  }
};

function sortRunRoutes(a, b) {
    if (a.updated_at > b.updated_at) {
      return -1;
    } else if (a.updated_at < b.updated_at) {
      return 1;
    } else {
    return 0;
    }
  }

module.exports = RunRouteStore;
