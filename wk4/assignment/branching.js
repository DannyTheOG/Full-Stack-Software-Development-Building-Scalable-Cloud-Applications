/*
    You want to buy a smartphone having cost price of 30,000 rupees. But have 25,000 rupees in your account.

    Form a program with the above data and print "I can buy the phone"  if you are able to buy the phone else print ."I can't buy the phone"


    Now say you also have a credit card of limit 3000 rupees. Which you can use along with your account balance to purchase the phone.

    
    Use this data in the program and print if you are able to buy the phone now.
    If not how much extra money is still required to buy it ,print the money.
*/

var phonePrice = 30000, accountBalance = 25000;

if (phonePrice < accountBalance) {
    console.log("I can buy the phone");

} else {
    console.log("I can't buy the phone");
}

var creditCardLimit = 3000;

if (phonePrice < accountBalance + creditCardLimit) {
    console.log("I can buy the phone now");

} else {
    var difference = phonePrice - accountBalance + creditCardLimit
    console.log("I need " + difference + " rupees to buy the phone");

}