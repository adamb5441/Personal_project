DELETE FROM trips
Where id = $1;

DELETE FROM Dates
Where trip_id = $2;

DELETE FROM Plans
Where trip_id = $3;
