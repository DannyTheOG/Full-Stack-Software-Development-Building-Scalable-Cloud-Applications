/*
    Create a map containing the details of a person as a key value pair in it.

    Map have firstname,lastname,city,mobilenumber as the key and take some demo data as their value to insert that in the map.

    Now print all keys once and  values once separately present  in the map without using any loop statement.
*/

let details = new Map( [] )

details.set( "firstname", "John" )
details.set( "lastname", "Moore" )
details.set( "city", "Belfast" )
details.set( "mobilenumber", "0798344529" )

console.log( details )
console.log( details.keys() )
console.log( details.values() )