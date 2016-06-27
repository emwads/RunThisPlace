# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET api/users/new`
- `POST api/users`
- `PATCH api/users`

### Session

- `GET api/session/new`
- `POST api/session`
- `DELETE api/session`

### Routes

- `GET /api/run_routes`
  - Routes index
  - accepts `user_id` query param to list all the run_routes a user has a workout in
- `POST /api/run_routes`
- `GET /api/run_routes/:id`
- `PATCH /api/run_routes/:id` -- bonus feature
- `DELETE /api/run_routes/:id`

### Workouts

- `GET /api/workouts`
  - shows current user's workouts
  - possible query param to limit search results
- `POST /api/workouts`
- `GET /api/workuts/:id`
- `PATCH /api/workouts/:id`
- `DELETE /api/workouts/:id`


### Friends

- `POST /api/friends/`
  - creates friending between current user and a `UserDetail`'s user
- `DELETE /api/friends/`
