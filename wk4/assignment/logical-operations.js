/*
Consider a scenario where if the day in the week is Saturday or Sunday ,it is then considered as Weekend.

1. Create two Boolean variables namely Saturday and Sunday which can be set to true based on which day is today. (Given that today is Sunday).

2. Define a statement to check if today is weekend or not and display the output accordingly. (Weekend can be either Saturday or Sunday).

3. Create a Boolean variable named free time which will represent whether I have free time or not.
 

Now consider if I have free time  and it is the weekend, then I can go to the park. Based on this consideration answer the below question.

4. Can I go to the park today ,after considering values as per points 3 and 4?
*/

var Saturday = false, Sunday = true;
var isWeekend = Saturday || Sunday;
console.log("Weekend: " + isWeekend)

var freeTime = true;
var goToPark = freeTime && isWeekend;
console.log("Go To Park: " + goToPark);
