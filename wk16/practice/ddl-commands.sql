# data definition language

show databases;

create database company;

drop database company;








use company;

create table customers (
customer_id int,
first_name varchar(20),
second_name varchar(20),
country varchar(20)
);

drop table customers;

# display table
desc customers;










# modify table (change column name and constraints)
alter table customers change second_name last_name varchar(25);

# modify table(change constraints only)
# MODIFY does everything CHANGE can, but without renaming the column
alter table customers modify first_name varchar(25);

alter table customers modify first_name varchar(25) NOT NULL;

alter table customers add column salary float;

alter table customers add date_of_birth date after last_name;

alter table customers drop column salary;








show tables;

rename table customers to employees;





