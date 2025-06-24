const path = require( 'path' );

const urlModulePath = path.join( __dirname, 'url-module.js' );

// this does not validate the file, it is just used to construct the file path in platform independent way
console.log( 'urlModulePath: ', urlModulePath );