const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello! i am Home Route");
});

app.get("/:username/:id", (req, res) => {
    let {username , id} = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}!</h1>`
  res.send(htmlStr);
});

app.get("/search", (req, res) =>{
    let { q } = req.query;
    if ( !q ) {
        res.send("<h1>No search query</h1>");
    }
     res.send(`<h1>These are the result for: ${q}</h1>`);
});



