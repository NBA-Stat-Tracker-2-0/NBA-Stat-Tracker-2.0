# Stat-Tracker


SQL SCHEMA: 

CREATE TABLE users (
    id  SERIAL,
    name varchar,
    email  varchar, 
    profilePic varchar,
    favorited_team varchar DEFAULT NULL
);

Create Table favoritePlayers (
  id SERIAL,
  user_id INT,
  player_id INT
);

Create Table players (
  id SERIAL,
  names INT
);