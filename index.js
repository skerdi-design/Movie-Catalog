const express = require("express");
const app = express();
const session = require("express-session");
const findUser = require("./utils.js");

app.use(express.static('public'));

app.use(express.json({limit:'1mb'}));

// app.use(express.urlencoded({extended: true}));

app.post('/register',(req,res)=>{
    // const b = findUser(req.body.username,req.body.email,req.body.password);
    // console.log(b);
    findUser(req.body.username,req.body.email,req.body.password)
    .then((docs)=>{
        if(docs === null){
            res.json();
        }else{
            res.redirect("/login");
        }
    });
})
app.post("/login",(req,res)=>{
    // console.log(req.body);
    res.redirect("/movieslist");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{console.log(`server started at port ${PORT}`)});