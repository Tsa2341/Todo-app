const express = require('express');
const path = require('path');
const compression = require('compression');
const fs = require('fs');
const app = express();

var Data = {};

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-origin","*");
    res.setHeader(
        "Access-Control-Header",
        "Origin, X-Requested-with, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods","POST, GET, PATCH, DELETE, OPTIONS"
    );
    next();
})
app.use("/",express.static(path.join(__dirname,"angular")));
app.use(compression())
app.get("/",(req, res)=>{
    res.json({
        messsage:"Welcome"
    })
    .sendFile(path.join(__dirname,"angular","index.html"), console.log(res));
    
});
app.get("/data",(req,res)=>{
    fs.readFile(path.join(__dirname,'./data/primary.json'),(err ,data)=>{
        Data = JSON.parse(data);
        res.send(JSON.stringify(Data));
    });
})
 




module.exports = {
    app,
    Data
};

