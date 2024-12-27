/**
    Create a Json Object having field-

    name=”Json”
    type=”Exchange format”
    similarTypes=[“XML”,”YML”,”CSV”]
    rating=10
    

    Now after creating this Json Object wrap it in a string and then use JSON.parse method to parse it into a Javascript object and then print that Javascript object.
 */

const jsonStr = `
{
    "name": "json",
    "type": "exchange format",
    "similarTypes": [
        "XML",
        "YML",
        "CSV"
    ],
    "rating": 10
}
`;

let json = JSON.parse( jsonStr );
console.log( json );