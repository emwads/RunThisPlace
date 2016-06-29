# Schema Information

## run_routes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
author_id   | integer   | not null, foreign key (references users), indexed
map_info    | json      | not null, geoJSON serialized data(?)


## workouts
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key, indexed
workout_type  | string    | not null, in [bike, run, hike, walk, gym, other]
run_route_id  | integer   | foreign key
title         | string    | not null
description   | text      |
calories      | integer   |
distance      | float     |
date          | date      | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key, references users, indexed
workout_id  | string    | not null
comment     | text      | not, null


## friends
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed, unique [user2_id]
folowee_id  | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
