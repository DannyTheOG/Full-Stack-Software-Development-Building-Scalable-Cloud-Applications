use company ;


# primary key and auto increment constrainta
CREATE TABLE employee_salary
(
	ID int PRIMARY KEY AUTO_INCREMENT,
	NAME varchar(20),
	AGE int,
	ADDRESS varchar(100),
	SALARY int
);



describe employee_salary ;



INSERT INTO employee_salary 
( NAME, AGE, ADDRESS, SALARY )
VALUES
("Oliver", 30, "Kumasi", 9000),
("George", 23, "Accra", 8000),
("Harry", 43, "Takoradi", 20000),
("Jack", 29, "Sunyani", 11123),
("Kwaku", 35, "Takoradi", 2000),
("Joe", 25, "Sunyani", 110123) ;


select * from employee_salary ;


drop table employee_salary ;



# unique key and check constraints
CREATE TABLE employee_salary
(
	ID int UNIQUE KEY,
	NAME varchar(20),
	AGE int,
	ADDRESS varchar(100),
	SALARY int CHECK (SALARY > 0)
);


describe employee_salary ;
