## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * **Authentication**
    * NewUserForm
    * NewSessionForm
  * **Dashboard**
    * WorkoutIndex
      * WorkoutIndexItem
        * **WorkoutDetail**
    * **CreateWorkout**
      * CreateWorkoutForm
        * CreateWorkoutDetail
        * RouteSearch
        * CreateWorkoutRoute
    * RouteIndex
      * RouteIndexItem
        * **Route Detail**
    * **CreateRoute**
      * CreateRouteForm
        * CreateRouteDetail
        * CreateRouteMap
    * **UserDetail**
      * UserDetail
      * FriendDetail


## Routes

* **component:** `App` **path:** `/`
  * **component:** `Authentication` **path:** none
  * **component:** `Dashboard` **path:** none
    * **component:** `WorkoutIndex` **path:** `workouts`
      * **component:** `WorkoutDetail` **path:** `workouts/:workout_id`
    * **component:** `RouteIndex` **path:** `run_routes`
      * **component:** `RouteDetail` **path:** `run_routes/:route_id`
    * **component:** `CreateWorkout` **path:** `workouts/:workout_id`
    * **component:** `CreateRoute` **path:** `run_routes/:route_id`
    * **component:** `UserDetail` **path:** `user`




## General Components Hierarchy
![components]

[components]: ./component_hierarchy.png
