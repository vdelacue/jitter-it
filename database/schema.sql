DROP DATABASE IF EXISTS jitter_db;
CREATE DATABASE jitter_db;

USE jitter_db;

CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT,
  body TEXT NOT NULL,
  created_at DATETIME default NOW(), 
  PRIMARY KEY (id)
);