const http=require('http');

const express=require('express');

const app=express();


app.use((req,res,next)=>{
    console.log('In the middleware');
    next();
})


app.use((req,res,next)=>{
    console.log('In the another middleware');
    res.send('<h1> hello to node js </h1>');
})

// console.log(routes.someText);

const server=http.createServer(app);


server.listen(3000);