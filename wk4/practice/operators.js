// arithmetic operators
var x = 12, y = 13;
/*
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
*/


// relational operators
var isBefore = "hello" > "hi";
// console.log(isBefore);

isBefore = "hello" < "hi";
// console.log(isBefore);

var isGreater = 10 > 9;
// console.log(isGreater);

// console.log(1 == "1"); // type unsafe equality operator
// console.log(11 === "1"); // type safe equality operator


// logical operators
var isRaining = true, goingByFoot = false, goingByCar = true;
var takeUmbrella = isRaining && goingByFoot;
console.log(takeUmbrella);

var priceOfPhone = 400, bankBalance = 600, amIInterested = true;
var willIBuyPhone = priceOfPhone < bankBalance && amIInterested;
console.log(willIBuyPhone);

var friendBankBalance = 900, priceOfPhone = 800;
willIBuyPhone = priceOfPhone < bankBalance || priceOfPhone < friendBankBalance;
console.log(willIBuyPhone);


// miscellaneous
var username = "DannyTheOG", message = "Good morning";

console.log(message + ', ' + username); // concatination

var city = "Belfast";
var isTrafficHuge = city === "Belfast" ? "Yes" : "No"; // ternary operator

console.log(isTrafficHuge);



