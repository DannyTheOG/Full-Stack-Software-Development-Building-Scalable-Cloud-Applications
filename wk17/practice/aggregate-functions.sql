use company;

CREATE TABLE employee 
(
	joining_month INT, 
	emp_id INT, 
	emp_name  VARCHAR(15), 
	dept_name VARCHAR(15), 
	salary INT 
);

INSERT INTO employee 
VALUES
(1, 101, "Oliver", "HR", 9000),
(1, 102, "George", "IT", 8000),
(1, 103, "Harry", "HR", 20000),
(3, 104, "Jack", "IT", 110123),
(6, 105, "Jacob", "SALES", 3000),
(6,106, "Noah", "SALES", 101000),
(3,107, "Charlie", "IT", 123456),
(Null, 108, "Robert", "IT", 30400);


select * from employee;


# count
select count(*) from employee;

select count(*) from employee where dept_name = 'IT' ;


# sum
select sum( salary ) from employee;

select sum( salary ) from employee where dept_name = 'SALES' and joining_month > 5 ;


# avg
select avg( salary ) from employee;


# min
select @minSalary := min( salary ) from employee;

select emp_name, salary from employee where salary = @minSalary ;



# multiple grouping
SELECT dept_name, joining_month, SUM(salary), AVG(salary) 
FROM employee 
GROUP BY dept_name, joining_month;


select dept_name, joining_month, sum(salary) 
from employee 
group by dept_name, joining_month 
having SUM(salary) > 10000; 

