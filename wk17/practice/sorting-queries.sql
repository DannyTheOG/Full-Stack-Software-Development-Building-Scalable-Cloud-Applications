# asc - order by is in ascending order by default
SELECT id, Name, Salary FROM employee_salary ORDER BY Salary ;



# desc - descending order
SELECT id, Name, Salary FROM employee_salary ORDER BY Salary desc ;



# order by address(desc) then order by salary(asc) if entities have the same address
SELECT * FROM employee_salary ORDER BY address desc, Salary asc