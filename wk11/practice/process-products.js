let strProduct = `
[
    {
        "name": "hammer",
        "description": "a claw hammer",
        "price": 120,
        "rating": {
            "min": 2,
            "max": 5
        }
    },
    {
        "name": "xbox controller",
        "description": "xbox wireless video game controller",
        "price": 55,
        "rating": {
            "min": 2,
            "max": 5
        }
    }
]
`;

// convert from JSON String to JS array
let products = JSON.parse( strProduct );
console.log( products );

let newProduct = {
    name: "phone",
    description: "iphone series 12",
    price: 340,
    rating: {
        "min": 4,
        "max": 5
    }
}
products.push( newProduct );
console.log( products );


// convert from JS array to JSON String
let newStrProducts = JSON.stringify( products );
console.log( newStrProducts );
