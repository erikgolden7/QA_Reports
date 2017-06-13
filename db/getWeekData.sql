SELECT * FROM bugs
WHERE weekDay = $1
ORDER BY day ASC;