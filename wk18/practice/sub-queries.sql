# subqueries
# staff who earn more than 'Oliver'
select emp_name, dept_name, joining_month
from employee
where joining_month > ( select joining_month from employee 
						where emp_name = 'Oliver');
                        

# IT staff who earn more than 'Oliver'
select emp_name, dept_name, joining_month
from employee
where dept_name = 'IT' and joining_month > ( select joining_month from employee 
						where emp_name = 'Oliver');
                        
                        
                        
# IN clause
select * from employee where dept_name IN ( select dept_name from employee where emp_name = 'Oliver' )