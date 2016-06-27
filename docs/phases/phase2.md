# Phase 2: Flux Architecture, googlemaps API, and Route CRUD 

## Rails
### Models
* Route

### Controllers
* Api::RoutesController (create, destroy, index, show, update)

### Views
* api/routes/index.json.jbuilder
* api/routes/show.json.jbuilder


## Flux
### Views (React Components)
* RoutesIndex
  - RoutesIndexItem
* RouteForm

### Stores
* Route

### Actions
* triggered by ApiUtil
  * ApiActions.receiveAllRoutes
  * ApiActions.receiveSingleRoute
  * ApiActions.deleteRoute
* triggers ApiUtil
  * RouteActions.fetchAllRoutes
  * RouteActions.fetchSingleRoute
  * RouteActions.createRoute
  * RouteActions.editRoute
  * RouteActions.destroyRoute

### ApiUtil
* ApiUtil.fetchAllRoutes
* ApiUtil.fetchSingleRoute
* ApiUtil.createRoute
* ApiUtil.editRoute
* ApiUtil.destroyRoute

## Gems/Libraries
