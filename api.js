const client = require('./connection.js')
const express = require('express');
const app = express();

app.listen(5000, "PORT IP",()=>{
    console.log("Server is now listening at port 5000")
})

client.connect();
