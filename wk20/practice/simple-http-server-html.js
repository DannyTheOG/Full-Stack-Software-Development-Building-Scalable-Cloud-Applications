const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const { url: reqUrl, headers } = req;

    const urlParts = url.parse(reqUrl);
    console.log( urlParts )

    console.log( headers );

    const { pathname } = urlParts;

    switch (pathname) {
        case "/home":
            res.setHeader( 200, {'Content-type': 'text/html' } )
            res.end(
              `
                <!doctype html>
                <html>
                  <body>Home Page</body>
                </html>
              `
            )
            break;
        case "/about":
            res.writeHead( 200, {'Content-type': 'text/html' } )
            res.end(
              `
                <!doctype html>
                <html>
                  <body>About Page</body>
                </html>
              `
            )
        case "/contact-us":
            res.writeHead( 200, {'Content-type': 'text/html' } )
            res.end(
              `
                <!doctype html>
                <html>
                  <body>Contact Us Page</body>
                </html>
              `
            )
        default:
            res.writeHead( 404, {'Content-type': 'text/html' } )
            res.end(
              `
                <!doctype html>
                <html>
                  <body>404 - Page Not Found</body>
                </html>
              `
            )
    }

    // res.end( 'in progress' );
});

server.listen(3002);
