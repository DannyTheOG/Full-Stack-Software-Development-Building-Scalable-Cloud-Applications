const express = require("express");
const path = require("path");

const uiHomeRouter = require("./routes/ui/home");
const uiAboutRouter = require("./routes/ui/about");

const apiHomeRouter = require("./routes/api/v1/home");

const app = express();


app.use( uiHomeRouter );
app.use( uiAboutRouter );

app.use( express.static( path.join( process.cwd(), 'public/assets' ) ) );

app.use( '/api/v1/restaurants', apiHomeRouter ); // adding the path here means. mounting router base path for endpoints in the apiHomeRouter


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})
.on("error", (error) => console.log("error", error.message));
