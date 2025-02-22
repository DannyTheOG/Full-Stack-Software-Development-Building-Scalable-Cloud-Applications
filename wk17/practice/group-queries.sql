# group by
select dept_name from employee group by dept_name ;


select dept_name from employee group by dept_name order by dept_name desc;

# count
select count(*), dept_name from employee group by dept_name ;


# avg
select avg(salary), dept_name from employee group by dept_name ;

select joining_month, avg(salary), dept_name from employee group by joining_month, dept_name ;


# sum
select joining_month,  dept_name, sum(salary) from employee 
group by joining_month, dept_name having sum(salary) > 10000;


select joining_month,  dept_name, sum(salary) from employee 
group by joining_month, dept_name having joining_month is not null ;




