/**
 * Created by Issarapong Poesua on 10/26/2017 AD.
 */

var express = require("express");
var app = express();

var port = process.env.PORT || 5000;


app.get("/", (req, res) => {
    var responseObject = {
        status: true,
        data: { text: "hello" }
    } 
    res.json(responseObject);
});


app.get("/cpgateway", (req, res) => {
    console.log("success cpgateway",req.body)
    res.send("success cpgateway get")
});



app.post("/cpgateway", (req, res) => {
    console.log("success cpgateway",req.body)
    res.send("success cpgateway post")
});




app.listen(port, () => {
   console.log("application is listening on:", port);
});