# Phase 5: Friending

## Rails
### Models
* Users

### Controllers
* Api::Friendings (create, destroy)

### Views
* user --> profile page
* api/friends

## Flux
### Views (React Components)
* UserInfo
* FriendInfo

### Stores
* Friends

### Actions
* triggered by ApiUtil
  * ApiActions.receiveAllFriends -takes workout id
  * ApiActions.deleteFriend
* triggers ApiUtil
  * FriendActions.fetchAllFriends
  * FriendActions.createFriend
  * FriendActions.destroyFriend

### ApiUtil
* ApiUtil.fetchAllFriends
* ApiUtil.createFriend
* ApiUtil.destroyFriend



## Gems/Libraries
