const http = require("http");
const url = require("url");

const x = 12,
    y = 13;

// http://localhost:3002/add   ----> URL for testing this code

const server = http.createServer((req, res) => {
    const { url: reqUrl } = req; // destructure req.url into 'url' and renamed it 'reqUrl'

    const urlParts = url.parse(reqUrl);
    // console.log( paths )

    const { pathname } = urlParts;

    switch (pathname) {
        case "/add":
            res.end("addition: " + (x + y));
            break;
        case "/subtract":
            res.end("subtraction: " + (x - y));
            break;
        case "/multiply":
            res.end("multiplication: " + x * y);
            break;
        default:
            res.end("unsupported operation ");
    }

    // res.end( 'in progress' );
});

server.listen(3002);
