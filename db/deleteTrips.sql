DELETE FROM trips, plans
USING trips.id LEFT JOIN plans.trip_id
WHERE trips.id = plans.trip_id AND plans.trip_id