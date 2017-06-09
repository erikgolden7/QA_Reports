SELECT count(*) FROM bugs
WHERE day = $1 AND month = $2 AND year = $3;