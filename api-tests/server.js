const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to my Logan's backend application");
});

app.get("/logan",(req,res)=>{
    res.send("Hello Logan!");
});


app.listen(3000,()=>{
    console.log("Listening");
});