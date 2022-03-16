CREATE DATABASE blognet;

CREATE TABLE blogger(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255),
    college VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    description VARCHAR(255),
    profile_pic VARCHAR(255),
    password VARCHAR(255) NOT NULL
    city VARCHAR(255),
);

