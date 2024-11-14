CREATE Table genre(
    genre_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    genre_name VARCHAR(255) NOT NULL
);

CREATE TABLE movie(
    movie_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    movie_name VARCHAR(255) NOT NULL,
    movie_year INT,
    genre_id INT,
    FOREIGN KEY (genre_id) REFERENCES genre(genre_id)
);

CREATE Table users(
    users_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    users_name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    passwords VARCHAR(255) NOT NULL,
    year_of_birth INT
);

CREATE TABLE review(
    review_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    users_id INT,
    movie_id INT,
    rating INT check (rating between 1 AND 5),
    FOREIGN Key (users_id) REFERENCES users(users_id),
    FOREIGN Key (movie_id) REFERENCES movie(movie_id)
);


CREATE Table favourite(
    favourite_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    users_id INT,
    movie_id INT,
    Foreign Key (users_id) REFERENCES users(users_id),
    Foreign Key (movie_id) REFERENCES movie(movie_id)
);
