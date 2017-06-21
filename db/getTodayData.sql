SELECT * FROM bugs
WHERE day = $1
ORDER BY hour ASC;