# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Routes

- `GET /api/routes`
  - Notes index
  - accepts `user_id` query param to list user's saved routes
- `POST /api/routes`
- `GET /api/routes/:id`
- `PATCH /api/routes/:id`
- `DELETE /api/routes/:id`

### Workouts

- `GET /api/workouts`
- `POST /api/workouts`
- `GET /api/workuts/:id`
- `PATCH /api/workouts/:id`
- `DELETE /api/workouts/:id`


### Friends

- `POST /api/friends/:user_id/`
  - creates friending between current user, user_id
- `DELETE /api/friends/:user_id`
