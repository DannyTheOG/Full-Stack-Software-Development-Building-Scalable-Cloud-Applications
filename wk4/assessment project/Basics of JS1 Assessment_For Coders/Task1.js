//1. Create a variable `isHappy` and assign it a boolean value based on the value of the given String variable `action`, whether it is `Smile` or not.

var action = "Smile"
//COMPLETE THE CODE HERE
var isHappy = action === "Smile" ? true : false;
console.log( isHappy );

// 2. Create a variable `favoriteSubjects` and assign it an array of strings representing your favorite subjects.

//COMPLETE THE CODE HERE
var favoriteSubjects = [ "Mathematics", "Social Studies", "Physical Education" ];
console.log( favoriteSubjects );

// 3. Write a program to compare two numbers, `num1` and `num2`, and check if `num1` is greater than or equal to `num2`.

var num1 = 10;
var num2 = 5;
//COMPLETE THE CODE HERE
console.log( num1 >= num2 );

// 4. Write a program to calculate the square of a given number, `num`.

var num = 4;
//COMPLETE THE CODE HERE
console.log( num * num );

// 5. Write a program to check if a given number, `num`, is even or odd.

var num = 7;
//COMPLETE THE CODE HERE
if( num % 2 === 0 ) { 
    console.log( "even number" ); 
} else if ( num % 2 === 1 ) {
    console.log( "odd number" ); 
} else {
    console.log ( "number is zero");
}

// 6. Write a program to check if a given year, `year`, is a leap year and divisible by 400 or divisible by 4 but not divisible by 100.

var year = 2024;
//COMPLETE THE CODE HERE
if ( ( year % 400 === 0 || year % 4 === 0 ) && year % 100 !== 0  ) {
    console.log( "leap year" );
} else {
    console.log( "common year" );
}

// 7. Write a program that checks if a given character, `char`, is a vowel or a consonant.

var char = "a";
//COMPLETE THE CODE HERE
switch (char) {
    case "a":
        console.log( char + " is a vowel" )
        break;
    case "e":
        console.log( char + " is a vowel" )
        break;
    case "i":
        console.log( char + " is a vowel" )
        break;
    case "o":
        console.log( char + " is a vowel" )
        break;
    case "u":
        console.log( char + " is a vowel" )
        break;
    default:
        console.log( char + " is a consonant" );
        break;
}

// 8. Write a program that determines the largest among three numbers, `num1`, `num2`, and `num3`.

var num1 = 10;
var num2 = 5;
var num3 = 8;
var largest;
//COMPLETE THE CODE HERE
if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}

console.log( largest + " is largest" );


// 9. Write a program that determines the sign of a given number, `num` (positive, negative, or zero), using the ternary operator.

var num = -5;
//COMPLETE THE CODE HERE  
var sign = num > 0 ? "positive" : "negative";
console.log( num + " is " + sign )

// 10. Write a program that determines the grade based on a given percentage, `percentage`. Use the following grading scale: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59).

var percentage = 85;
//COMPLETE THE CODE HERE
if ( percentage >= 90 ) {
        console.log( "Grade A" );

} else if ( percentage >= 80 ) {
        console.log( "Grade B" );

} else if ( percentage >= 70) {
        console.log( "Grade C" );

} else if ( percentage >= 60 ) {
        console.log( "Grade D" );

} else {
        console.log( "Grade F" );
}