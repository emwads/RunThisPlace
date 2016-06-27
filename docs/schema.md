# Schema Information

## routes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | string    |
author_id   | integer   | not null, foreign key (references users), indexed
map_info    | json      | not null, geoJSON serialized data(?)

## routings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed
route_id    | integer   | not null, foreign key, indexed


## workouts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed
work_type   | string    | not null, in [bike, run, hike, walk, gym, other]
route_id    | integer   | foreign key
title       | string    | not null
description | string    |
calories    | integer   |
distance    | float     |
date        | date      | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key, references users, indexed
workout_id  | string    | not null
comment     | string    | not, null


## friends
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key, indexed, unique [user2_id]
user2_id    | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
