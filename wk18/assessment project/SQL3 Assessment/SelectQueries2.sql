/* use food_order_app database */
use food_order_app;

/* 1. Retrieve number of fooditems for each cuisine */
SELECT c.name AS cuisine_name, COUNT(f.id) AS total_fooditems
FROM fooditem f
JOIN cuisine c ON f.cuisineId = c.id
GROUP BY c.name;

/* 2. Retrieve category names in the order of highest to lowest no. of fooditems */
SELECT c.name AS category_name, COUNT(f.id) AS total_fooditems
FROM fooditem f
JOIN category c ON f.categoryId = c.id
GROUP BY c.name
ORDER BY total_fooditems DESC;

/* 3. Retrieve cuisine name as CuisineName, fooditem name as name FoodItemName 
and description as Description of all the fooditems belonging to 'Italian' cuisine */
SELECT c.name AS CuisineName, f.name AS FoodItemName, f.description AS Description
FROM fooditem f
JOIN cuisine c ON f.cuisineId = c.id
WHERE c.name = 'Italian' AND f.isActive = 1 AND c.isActive = 1; 

/* 4. Retrieve details of food items, including their name, vegetarian status,
 and cuisine name, for only those food items that are vegetarian. */
SELECT f.name AS FoodItemName, f.isVeg AS IsVegetarian, c.name AS CuisineName
FROM fooditem f
JOIN cuisine c ON f.cuisineId = c.id
WHERE f.isVeg = 1 AND f.isActive = 1 AND c.isActive = 1;
 
/* 5. Retrieve the details of users who have items in their cart 
along with the total order amount */
SELECT u.id AS UserId, u.userName AS Username, u.fullName AS FullName,
    u.emailId AS Email, u.phoneNo AS PhoneNumber, c.orderTotalPrice AS CartTotal
FROM user u
JOIN cart c ON u.id = c.userId
WHERE u.isActive  = c.isActive;
