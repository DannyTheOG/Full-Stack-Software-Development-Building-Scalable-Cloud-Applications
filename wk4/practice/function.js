// function declaration syntax
function sum (x, y) {
    var total = x + y;
    return total;
}

var result = sum(12, 45);
console.log(result);

 
// variable function declaration syntax
var sum2 = function(x, y) {
    var total = x + y;
    return total;
};

result = sum2(1, 45);
console.log(result);