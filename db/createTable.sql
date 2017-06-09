CREATE TABLE IF NOT EXISTS bugs (
    id SERIAL PRIMARY KEY,
    daycount INTEGER,
    totalcount INTEGER,
    day INTEGER,
    month INTEGER,
    year INTEGER,
    hour INTEGER
);