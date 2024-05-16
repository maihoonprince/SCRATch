const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hello PRince")
})

app.listen(3000, function(req, res){
    console.log("App Running on PORT 3000");
})