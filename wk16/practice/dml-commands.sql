# data manipulation language

# insert records
insert into customers ( customer_id, first_name, second_name, country ) 
VALUES 
( 1, 'Mike', 'Christensen', 'USA' ),
( 2, 'Andy', 'Hollands', 'Australia'),
( 3, 'Ravi', 'Vedantam', 'India' );




# update
update customers
set first_name= 'John', last_name= 'Kent'
where country = 'USA';




# delete
delete from customers 
where first_name='John';




# truncate
truncate table customers