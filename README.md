# RunThisPlace

[RunThisPlace live][heroku]

[heroku]: https://runthisplace.herokuapp.com/

RunThisPlace is a full-stack web application inspired by Map My Run. It can be used to track exercise and activity information including workouts and running routes. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural frameworks on the frontend.  

## Features & Implementation

### React-Based Front End
RunThisPlace focuses on a delivering content quickly to users. Aside from the initial loading of an HTML document when entering the application, all communication to the server is done with light-weight ajax requests, not limited to, but including authenticating the user, and loading workout related data. This results in a speedier web app than traditional workout trackers provide.


### Logging of Workouts

Core functionality of any fitness related app involves logging the workouts or activities a user has done. In RunThisPlace, workouts are stored in a `workout` database table and logged by the user via a simple form. Aside from creation, Workouts can be updated and destroyed via user interaction.


### User input Running Routes

Users can also track what routes they enjoy running/have taken. Routes are input into a form by the user via clicking on a map for points along the route. The points of the map are provided using the functionality included with the google maps api. Directions between points are also provided by the google maps api via the directions service. The points and other information are stored in the backend in a `routes` table.
Users can see a detailed display of map routes, which is loaded with a google maps javascript api. Listings of maps are shown using google's static maps api to decrease load time/requests to the maps  service.


![routeMaking]


### An Activity Feed of Followed Users

Users are additionally allowed to follow other users and be updated and motivated by other users' progress. An index of users makes it easy to find and add users with the click of a button (see the figure below). The user can then see the workout activity of the followed users via an activity feed, linked from the dashboard.

Following is implemented in the backend with a  `follows` join table that links a follower to a followee. The workouts associated with the followees are fetched in the backend in rails.

![following]


### Commenting on workouts

Users can leave comments on any workouts (that they have access to). Visiting a user's detailed workout page or  activity feed allows for the viewing/creating of comments associated with the workout. Users can also delete others' comments on their own workout or their own written comments. Comments are stored on a `comments` table in the database and keyed to the author and the workout it is describing.

![comment]


## Planned Features

Some features are in the pipeline and are discussed briefly below


### Liking Workouts

In other workout tracking sites, users can like or cheer other users on based on their workout progress. The implementation of this should be similar to the comments feature.


### Goals

Most users workout with some goal/resolution in mind. Potential features include the making and tracking of goals (e.g., number of workouts in a month, miles per week, etc). Users can then check progress towards their goals.




[following]: ./docs/following.png
[comment]: ./docs/comment.png
[routeMaking]: ./docs/comment.png
[workouts]: ./docs/comment.png
