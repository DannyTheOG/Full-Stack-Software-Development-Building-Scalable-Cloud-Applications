# select commands

select * from customers;


# select a few columns from the table
select first_name, country from customers;


# where clause
select * from customers where country = 'India';


# 'like' or 'not like' clause  

# ‘%’ - any number of characters.
# ‘_’ - only one character.
select * from customers where first_name like '%a%';


# 'is null' and 'is not null' operators
select first_name, country from customers where salary is null;


# logical operators ( 'and', 'or', 'not' )
select first_name, country from customers where salary is null and country = 'USA';


# relational operators ( =, <, >, <=, >= ) can also be used in the where clause


# order by clause (asc/desc)
# data can be sorted in ascending or descending order
select first_name, country from customers order by first_name asc;


# limit/offset clause
# the LIMIT by clause is used to limit and print the rows.
# OFFSET mentioned if rows need to be fetched in between.
select first_name, country from customers limit 2,  1; # fetches first 2 rows after the first row






