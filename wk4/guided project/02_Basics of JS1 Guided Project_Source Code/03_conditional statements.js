// 1. Write a program that checks if a given number, `num`, is positive, negative, or zero.
var num = 10; 
if( num > 0 ) { 
  console.log( "positive" ); 
} else if ( num < 0 ) { 
  console.log( "negative" ); 
} else { 
  console.log( "zero" );
}

// 2. Write a program that checks if a given number, `num`, is even or odd.
var num = 70; 
if( num % 2 === 0 ) { 
  console.log( "even number" ); 
} else { 
  console.log( "odd number" ); 
}

// 3. Write a program that determines if a given year, `year`, is a leap year and
// has 366 days, or a common year and has 365 days.
/*
We use an if statement to check if the year is a leap year based on the following conditions:
  - If the year is divisible by 4 (year % 4 === 0).
  - But not divisible by 100 (year % 100 !== 0).
  - Or it is divisible by 400 (year % 400 === 0).
If any of these conditions are true, the year is considered a leap year and has 366 days. Otherwise, it is a common year and has 365 days.
*/
var year = 2024;
if ( year % 4 === 0 || year !== 0 || year % 400 === 0 ) {
  console.log( "leap year, 366 days");
} else {
  console.log( "common year, 365 days");
}



// 4. Develop a program that determines the price of a movie ticket based on a person's age. If the person is under 12 or over 65, the ticket price is $7; otherwise, it's $12.


// 5. Write a program that categorizes a person's age into different groups: child (0-12 years), teenager (13-19 years), adult (20-64 years), and senior (65+ years).

