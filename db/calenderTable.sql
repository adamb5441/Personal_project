CREATE TABLE Dates(
id SERIAL PRIMARY KEY,
startDate timestamptz,
endDate timestamptz,
title TEXT,
trip_id INTEGER
)