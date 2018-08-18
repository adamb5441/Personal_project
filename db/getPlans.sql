SELECT info, name, trip_id, plan_id
FROM trips LEFT JOIN plans
ON trips.id=plans.trip_id
where trip_id = $1