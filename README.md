# RunThisPlace
[Heroku link][heroku]

[heroku]: https://runthisplace.herokuapp.com

## Minimum Viable Product

RunThisPlace is a web application inspired by Map My run that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README ([sample production README](docs/production_readme.md) )
- [ ] Creation of running routes via map
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Friending
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Comments on workouts
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Dashboard for tracking workouts
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

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank dashboard page after signin
- [ ] create `Workout` model
- [ ] CRUD API for workouts (`WorkoutsController`)
- [ ] jBuilder views for accessing workouts
- [ ] seed database with `User` and `Workout` data

### Phase 2: Routes Model, API, and basic APIUtil (3 days, W1 Fri 6pm)

**Objective:** Routes can be created, read, edited and destroyed through the
API. route viewing and creation occurs on an embedded google map.


- [ ] create `Route` model
- [ ] seed the database with a small amount of `Route` data
- [ ] CRUD API for routes (`RoutesController`)
- [ ] jBuilder views for accessing routes
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console

### Phase 3: Allow for workout comments (1 days, W2 Mon 6pm)

**Objective:** Users can comment on workouts. Comments are nested in workouts

- [ ] create `Comment` model
- [ ] seed the database with a small amount of `Comment` data
- [ ] CRUD API for comment (`CommentController`)
- [ ] jBuilder views for accessing comments


### Phase 4: Start Styling (1 days, W2 Tu 6pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase5: Friending (1 day, W2 Wed 6pm)

**Objective:** Users can friend each other

- [ ] update `user` model
- [ ] update user view
- build out API, Flux loop, and components for:
  - [ ] friending create, destroy
- Use CSS to style new views


### Phase 6: Styling Cleanup and Seeding (2 days, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.


[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
[phase-six]: docs/phases/phase6.md
