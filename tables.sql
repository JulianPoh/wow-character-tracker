CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  email varchar(255),
  password varchar(255),
  location varchar(255)
);


CREATE TABLE IF NOT EXISTS characters (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  faction varchar(255),
  race varchar(255),
  gender varchar(255),
  class varchar(255),
  image varchar(255),
  users_id INTEGER
);


CREATE TABLE IF NOT EXISTS achievements (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  description text,
  characters_id INTEGER
);