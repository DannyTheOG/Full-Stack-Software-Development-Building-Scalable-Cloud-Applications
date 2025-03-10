# multi table queries
select a.emp_name, a.dept_name, b.name, b.address
from employee a, employee_salary b
where a.emp_id <> b.id  ;