const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.get("/",(req, response) =>{
    response.json({
        message: "Welcome to the Api"
    })
})

app.listen(5000,()=>{
    console.log("Server is running on 5000 port");
})