use company ;

select * from customers;

# obtain the max of some values and put it in a variable
select @maxSalary := max(salary) from customers ;

select * from customers where salary = @maxSalary ;


# greater than
select * 
from customers 
where salary > 2000 
order by first_name ;


# addition
SELECT ( 25 + 7 ) AS ADDITION ;


# cos
SELECT COS(1) As Cos ;

SELECT COS( PI() / 2 ) As Cos ;


# division - integer
SELECT 25 DIV 6 ;


# modulo
SELECT 25 MOD 6 ;


# absolute value
SELECT ABS( -2.568798 ) ;


# ceil value
SELECT CEIL( -2.568798 ) ;

SELECT CEIL( 2.568798 ) ;



# floor value
SELECT FLOOR( -2.568798 ) ;

SELECT FLOOR( 2.568798 ) ;



# greatest
select GREATEST(2343, 5432, 435, 9.098 ) ;



# ln - natural log
select LN(2.23456787654334567) ;



# log to base 10
select LOG10(100) ;


# log to base 2
select LOG2(1024) ;



# sign
select SIGN(-2) ;



# sign
select SIGN(2) ;