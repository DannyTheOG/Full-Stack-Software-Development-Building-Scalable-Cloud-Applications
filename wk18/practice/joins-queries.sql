use company;

select * from employee;

select * from employee_salary;


# inner join, this is the default for join
select a.emp_name, a.dept_name, b.address, b.salary
from employee a
inner join employee_salary b
on a.emp_id = b.id;


# left join
# note all employees in 'a' will show but not 'b'
select a.emp_name, a.dept_name, b.address, b.salary
from employee a
left join employee_salary b
on a.emp_id = b.id;


# right join
# # note all employees in 'b' will show but not 'a'
select a.emp_name, a.dept_name, b.address, b.salary
from employee a
right join employee_salary b
on a.emp_id = b.id


