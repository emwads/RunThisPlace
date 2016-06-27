# Phase 3: Comment CRUD

## Rails
### Models
* Comment

### Controllers
* Api::WorkoutsController (show)

### Views
* api/Workouts/show.json.jbuilder


## Flux
### Views (React Components)
* Workouts index

### Stores
* Comment?

### Actions
* triggered by ApiUtil
  * ApiActions.receiveAllComments
  * ApiActions.receiveSingleComment
  * ApiActions.deleteComment
* triggers ApiUtil
  * CommentActions.fetchAllComments
  * CommentActions.fetchSingleComment
  * CommentActions.createComment
  * CommentActions.editComment
  * CommentActions.destroyComment

### ApiUtil
* ApiUtil.fetchAllComments
* ApiUtil.fetchSingleComment
* ApiUtil.createComment
* ApiUtil.editComment
* ApiUtil.destroyComment

## Gems/Libraries
