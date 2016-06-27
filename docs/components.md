## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * **Dashboard**
    * WorkoutIndex
      * WorkoutIndexItem
        * **WorkoutDetail**
    * **CreateWorkout**
      * CreateWorkoutForm
        * CreateWorkoutDetail
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
  * **component:** `Dashboard` **path:** `/`
    * **component:** `WorkoutIndex` **path:** `workouts`
      * **component:** `WorkoutDetail` **path:** `workouts/:workout_id`
    * **component:** `RouteIndex` **path:** `routes`
      * **component:** `RouteDetail` **path:** `routes/:route_id`
    * **component:** `CreateWorkout` **path:** `workouts/:workout_id`
    * **component:** `CreateRoute` **path:** `routes/:routes_id`
    * **component:** `UserDetail` **path:** `user`




## General Components Hierarchy
![components]

[components]: ./component_hierarchy.png
