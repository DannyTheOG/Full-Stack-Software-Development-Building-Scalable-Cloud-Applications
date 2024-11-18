// array destructuring reduces the amount of work when you create to many variables from an array item.
const days = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun"
]

const [first, second, third, fourth, fifth, ...weekends] = days
console.log ( first, second, third, weekends);

/*
    if we need to skip an item during array destructuring, 
    we can add a comma (,) in the location of the element we want to skip.
    the number of commas added equals the number of elements skipped.
    we can also assign values. e.g. six
*/
const numbers = [ 1, 2, 3, 4]

const[one, two, , four, five = 5] = numbers;
console.log ( one, two, four, five );