CREATE TABLE users (
    username VARCHAR(25) PRIMARY KEY,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL 
        CHECK (Position('@' IN email) > 1)
)

CREATE TABLE spreads (
    id SERIAL PRIMARY KEY,
    timedate DATE,
    title TEXT NOT NULL,
    spread TEXT NOT NULL,
    comments TEXT NOT NULL,
    username VARCHAR(25)
        REFERENCES users ON DELETE CASCADE
    
)