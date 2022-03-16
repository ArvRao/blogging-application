CREATE TABLE comment(
    id SERIAL PRIMARY KEY,
    content VARCHAR(255) NOT NULL,
    postedBy INT,
    FOREIGN KEY (postedBy) REFERENCES blogger(id),
    replies TEXT [],
    
);