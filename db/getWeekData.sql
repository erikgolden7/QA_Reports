SELECT * FROM bugs
WHERE week = $1
ORDER BY day ASC;