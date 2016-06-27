# Phase 3: Run Route CRUD api, Flux Architecture, googlemaps API

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
  - Route Detail
* RouteForm
  - CreateRouteDetails
  - CreateRouteMap

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
  * RouteActions.destroyRoute

### ApiUtil
* ApiUtil.fetchAllRoutes
* ApiUtil.fetchSingleRoute
* ApiUtil.createRoute
* ApiUtil.destroyRoute

## Gems/Libraries
