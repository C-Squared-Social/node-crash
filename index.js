/*
console.log("hello from text");
const Person = require('./person');

const person1 = new Person("John", 37);
person1.greeting();
*/
const http =require('http');
const path =require('path');
const fs =require('fs');


const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.end("<h1>here</h1>");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
