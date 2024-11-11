/* 
    Create a JavaScript function that takes an array of numbers as input and returns a new array containing the squares of those numbers. You need to implement a reusable function that can calculate the squares for any array of numbers provided as an argument.    
*/

function calculateSquares(arr) {
    var arrSqaures = [], i = 0;

    arr.forEach(element => {
       arrSqaures.push( arr[i] * arr[i] );
       i++;
    });

    // console.log[arrSqaures]
    return arrSqaures;
}

var numbers = [1, 2, 3, 4, 5];
var newArr = calculateSquares(numbers)

console.log(newArr);