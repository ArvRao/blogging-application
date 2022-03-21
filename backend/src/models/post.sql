CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    body TEXT,
    likes INT,
        FOREIGN KEY (likes) REFERENCES blogger(id),
    comments INT,
        FOREIGN KEY (comments) REFERENCES comment(id),
    author INT,
        FOREIGN KEY (author) REFERENCES blogger(id)
);