# Phase 4: Comment CRUD api, flux parts

## Rails
### Models
* Comment

### Controllers
* Api::WorkoutsController (show)

### Views
* api/Workouts/show.json.jbuilder


## Flux
### Views (React Components)
* Workouts detail
* Comment Detail

### Stores
* Comment

### Actions
* triggered by ApiUtil
  * ApiActions.receiveAllComments -takes workout id
  * ApiActions.deleteComment
* triggers ApiUtil
  * CommentActions.fetchAllComments
  * CommentActions.createComment
  * CommentActions.destroyComment

### ApiUtil
* ApiUtil.fetchAllComments
* ApiUtil.createComment
* ApiUtil.destroyComment

## Gems/Libraries
