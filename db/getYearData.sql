SELECT * FROM bugs
WHERE month = $1
ORDER BY day ASC;