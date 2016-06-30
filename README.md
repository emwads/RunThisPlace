# RunThisPlace
[Heroku link][heroku]

[heroku]: https://runthisplace.herokuapp.com

## Minimum Viable Product

RunThisPlace is a web application inspired by Map My run that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README ([sample production README](docs/production_readme.md) )
- [ ] Creation of running routes via map
  - [ ] Rendering of map with a routes path
  - [ ] Allow users to click on map to create a run route
  - [ ] Saves run routes into the database via geoJSON(?)
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Friending
  - [ ] Users can add friends
  - [ ] Friended users appear on user's profile
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Comments on workouts
  - [ ] Users can comment on any workout
  - [ ] comments appear on workout's detail page
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Dashboard for tracking workouts
  - [ ] Dashboard shows user's most recent workouts in a workout listing
  - [ ] Dashboard possibly shows lifetime mileage data
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

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
- [ ] CRUD API for workouts (`WorkoutsController`)
- [ ] build out Flux loop, and components for Workouts
- [ ] jBuilder views for accessing workouts
- [ ] seed database with `User` and `Workout` data
- [ ] create Workout related components (index, list items, details, create form)
- [ ] create and style `Dashboard` component

### Phase 3: RunRoutes Model, API, and basic APIUtil (3 days, W2 Tu 6pm)

**Objective:** RunRoutes can be created, read and destroyed through the
API. route viewing and creation occurs on an embedded google map.


- [ ] create `RunRoutes` model
- [ ] seed the database with a small amount of `RunRoutes` data
- [ ] CRUD API for routes (`RunRoutesController`)
- [ ] jBuilder views for accessing RunRoutes
- [ ] user interface as googlemaps components for creating and showing RunRoutes
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console

### Phase 4: Allow for workout comments (1 days, W2 Wed 6pm)

**Objective:** Users can comment on workouts. Comments are nested in workouts

- [ ] create `Comment` model
- [ ] seed the database with a small amount of `Comment` data
- [ ] CRUD API for comment (`CommentController`)
- [ ] jBuilder views for accessing comments
- [ ] react components for creating/destroying comments


### Phase5: Friending (1 day, W2 Thu 6pm)

**Objective:** Users can friend each other

- [ ] update `user` model
- [ ] update user view
- build out API, Flux loop, and components for:
  - [ ] friending create, destroy
- Use CSS to style new views


[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
