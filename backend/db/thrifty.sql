DROP DATABASE IF EXISTS thrifty;
CREATE DATABASE thrifty;

\c thrifty;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  password_digest VARCHAR,
  first_name VARCHAR,
  last_name VARCHAR,
  dob INTEGER,
  bio VARCHAR,
  gender VARCHAR,
  gender_pref VARCHAR,
  profile_pic_name text,
  profile_pic bytea
   
);
