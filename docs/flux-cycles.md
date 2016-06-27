# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Routes Cycles

### Routes API Request Actions

* `fetchAllRoutes`
  0. invoked from `Dashboard` or `RoutesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/routes` is called.
  0. `receiveAllRoutes` is set as the callback.


* `createRoute`
  0. invoked from new route button `onClick`
  0. `POST /api/routes` is called.
  0. `receiveSingleRoute` is set as the callback.


* `fetchSingleRoute`
  0. invoked from `RouteDetail` `didMount`/`willReceiveProps`
  0. `GET /api/routes/:id` is called.
  0. `receiveSingleRoute` is set as the callback.


* `updateRoute`
  0. invoked from `CreateRouteForm` `onSubmit`
  0. `POST /api/routes` is called.
  0. `receiveSingleRoute` is set as the callback.


* `destroyRoute`
  0. invoked from delete route button `onClick`
  0. `DELETE /api/routes/:id` is called.
  0. `removeRoute` is set as the callback.

### Routes API Response Actions

* `receiveAllRoutes`
  0. invoked from an API callback.
  0. `Route` store updates `_routes` and emits change.


* `receiveSingleRoute`
  0. invoked from an API callback.
  0. `Route` store updates `_routes[id]` and emits change.


* `removeRoute`
  0. invoked from an API callback.
  0. `Route` store removes `_routes[id]` and emits change.


### Store Listeners

* `RoutesIndex` component listens to `Route` store.
* `RouteIndexItem` component listens to `Route` store.
* `RouteDetail` component listens to `Route` store.


## Workout Cycles

### Workouts API Request Actions

* `fetchAllWorkouts`
  0. invoked from `Dashboard` or `WorkoutsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/workouts` is called.
  0. `receiveAllWorkouts` is set as the callback.


* `createWorkout`
  0. invoked from new workout button `onClick`
  0. `POST /api/workouts` is called.
  0. `receiveSingleWorkout` is set as the callback.


* `fetchSingleWorkout`
  0. invoked from `WorkoutDetail` `didMount`/`willReceiveProps`
  0. `GET /api/workouts/:id` is called.
  0. `receiveSingleWorkout` is set as the callback.


* `updateWorkout`
  0. invoked from `WorkoutForm` `onSubmit`
  0. `POST /api/workouts` is called.
  0. `receiveSingleWorkout` is set as the callback.


* `destroyWorkout`
  0. invoked from delete workout button `onClick`
  0. `DELETE /api/workouts/:id` is called.
  0. `removeWorkout` is set as the callback.


### Workouts API Response Actions

* `receiveAllWorkouts`
  0. invoked from an API callback.
  0. `Workout` store updates `_workouts` and emits change.


* `receiveSingleWorkout`
  0. invoked from an API callback.
  0. `Workout` store updates `_workouts[id]` and emits change.


* `removeWorkout`
  0. invoked from an API callback.
  0. `Workout` store removes `_workouts[id]` and emits change.


### Store Listeners

* `WorkoutsIndex` component listens to `Workout` store.
* `WorkoutsIndexItem` component listens to `Workout` store.
* `WorkoutDetail` component listens to `Workout` store.


## Friend Cycles

### Friends API Request Actions

* `fetchAllFriends`
  0. invoked from `UserDetail` `didMount`/`willReceiveProps`
  0. `GET /api/friends` is called.
  0. `receiveAllFriends` is set as the callback.


* `destroyFriend`
  0. invoked from unfriend button `onClick`
  0. `DELETE /api/friends/:id` is called.
  0. `removeFriend` is set as the callback.


### Friends API Response Actions

* `receiveAllFriends`
  0. invoked from an API callback.
  0. `Friend` store updates `_friends` and emits change.


* `removeFriend`
  0. invoked from an API callback.
  0. `Friend` store removes `_friends[id]` and emits change.

### Store Listeners

* `FriendDetail` component listens to `Friend` store.



## RouteSearch Cycles
* bonus feature to search for routes


* `fetchSearchSuggestions`
  0. invoked from `Create Workout Form` `onChange` when there is text
  0. `GET /api/run_routes` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.


* `receiveRouteSuggestions`
  0. invoked from an API callback.
  0. `RouteSearch` store updates `_routeSuggestions` and emits change.


* `removeRouteSuggestions`
  0. invoked from `Create Workout Form` `onChange` when empty
  0. `RouteSearch` store resets `_routeSuggestions` and emits change.


### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
