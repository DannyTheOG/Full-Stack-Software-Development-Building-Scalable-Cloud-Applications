const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const { url: reqUrl } = req; // destructure req.url into 'url' and renamed it 'reqUrl'

    // http://localhost:3002/add?x=12&y=2   ----> URL for testing this code

    const urlParts = url.parse(reqUrl, true); // 'true' parameters allows url to accept query parameters.
    console.log( urlParts )

    const { pathname } = urlParts;
    const { x, y } = urlParts.query;

    switch (pathname) {
        case "/add":
            res.end("addition: " + (+x + +y)); //adding + in front of a string, converts it to a number
            break;
        case "/subtract":
            res.end("subtraction: " + (+x - +y));
            break;
        case "/multiply":
            res.end("multiplication: " + (+x * +y));
            break;
        default:
            res.end("unsupported operation ");
    }

    // res.end( 'in progress' );
});

server.listen(3002);
