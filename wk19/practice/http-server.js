const http = require( "http" );

const server = http.createServer( (request, response) => {
  console.log( "server started..." );
  response.write( "Welcome, HTTP" );
  response.end();
})

server.listen( 3001 );