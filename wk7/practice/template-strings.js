const name = "John", message = "Howdy!";
// const greeting = message + " " + name;
const greeting = `${message} ${name}`;
console.log( greeting );

// preserving new lines
const holla = `${message} 


${name}`;
console.log( holla );


// preserving HTML structure/markup
const john = {
    name: "John",
    email: "john@gmail.com",
    age: 57,
    movement: function() {
        return "walking";
    }
}

const table = `
    <tr>
        <td>${john.name}</td>
        <td>${john.email}</td>
        <td>${john.age}</td>
        <td>${john.movement()}</td>
    </tr>
`;

console.log( table );