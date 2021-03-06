# RunThisPlace
[Heroku link][heroku]

[heroku]: https://runthisplace.herokuapp.com

## Minimum Viable Product

RunThisPlace is a web application inspired by Map My run that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README ([sample production README](docs/production_readme.md) )
- [x] Creation of running routes via map
  - [x] Rendering of map with a routes path
  - [x] Allow users to click on map to create a run route
  - [x] Saves run routes into the database
  - [x] Adequate CSS styling
- [x] Following
  - [x] Users can follow other users
  - [x] Followed users appear on user's activity feed
  - [x] Smooth, bug-free navigation
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling
- [x] Comments on workouts
  - [x Users can comment on any workout
  - [x] comments appear on workout's detail page
- [x] Dashboard for tracking workouts
  - [x] Dashboard shows user's most recent workouts in a workout listing
  - [x] Adequate seed data to demonstrate the site's features
  - [x] Adequate CSS styling
  - [ ] Static maps for displaying maps(?)


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication + workouts

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] styled user signup/signin pages
- [x] blank dashboard page after signin


### Phase 2: Workout model, API, stores and Dashboard components (1 day, W1 Wed 6pm)
**Objective:** Workouts can be created, read, updated and destroyed via the api

- [x] create `Workout` model
- [x] CRUD API for workouts (`WorkoutsController`)
- [x] build out Flux loop, and components for Workouts
- [x] jBuilder views for accessing workouts
- [x] seed database with `User` and `Workout` data
- [x] create Workout related components (index, list items, details, create form)
- [x] create and style `Dashboard` component

### Phase 3: RunRoutes Model, API, and basic APIUtil (3 days, W2 Mon 6pm)

**Objective:** RunRoutes can be created, read and destroyed through the
API. route viewing and creation occurs on an embedded google map.


- [x] create `RunRoutes` model
- [x] seed the database with a very small amount of `RunRoutes` data
- [x] CRD API for routes (`RunRoutesController`)
- [x] jBuilder views for accessing RunRoutes
- [x] user interface as googlemaps components for creating and showing RunRoutes
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console

### Phase 4: Folllowing (1 day, W2 Tu 6pm)

**Objective:** Users can follow each other

- [x] update `user` model
- [x] update user view
- [x] build out API, Flux loop, and components friending create, destroy
- [x] Use CSS to style new views

### Phase 5: Allow for workout comments (1 days, W2 Wed 6pm)

**Objective:** Users can comment on workouts. Comments are nested in workouts

- [x] create `Comment` model
- [x] seed the database with a small amount of `Comment` data
- [x] CRUD API for comment (`CommentController`)
- [x] jBuilder views for accessing comments
- [x] react components for creating/destroying comments



### Phase 6: styling + dashboard

**Objective:** style and create dashboard
- [x] good styling
- [x] sliced/trimmed down list of routes/workouts/friends
- [ ] production read me

### Phase 7: Finish Runroutes (1 day, W2 Thu 6pm)

**Objective:** Add editing to run routes

- [ ] fix query limit issues
- [ ] fix routes to save dragged points?
- [ ] add more seed data
- [ ] get selector for routes in workout form
- [ ] add editing
- [ ] lifetime miles?



[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
