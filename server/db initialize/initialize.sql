DROP DATABASE IF EXISTS cowly;

CREATE DATABASE cowly;

USE cowly;

DROP TABLE IF EXISTS cows;

CREATE TABLE cows
(
  cow_id INT NOT NULL AUTO_INCREMENT,
  cow_name VARCHAR(45) UNIQUE,
  cow_description VARCHAR(280) NOT NULL,
  cow_pic VARCHAR(280),
  PRIMARY KEY(cow_id)
);


