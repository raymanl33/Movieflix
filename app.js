const express = require("express")
const app = express();
const port = 3000;


app.get("/cstisgreat", function(req, res) {
    res.send("send this text");
});

app.listen(port)