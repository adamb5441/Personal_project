insert into trips
( name, img, profile_id)
values
($1, $2, $3)
RETURNING *;