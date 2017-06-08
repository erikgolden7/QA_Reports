Update bugs
SET active = 'false'
WHERE id = (select MAX(id) from bugs)