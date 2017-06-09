--Update bugs
--SET active = 'false'
--WHERE id = (select MAX(id) from bugs)

delete from bugs
where id = (select MAX(id) from bugs)