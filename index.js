const express = require("express");
const app = express();
const session = require("express-session");
const {findUser,authUser} = require("./utils.js");
let user;

app.use(express.static('public'));

app.use(express.json({limit:'1mb'}));

app.use(session({
    secret:"hellocookie",
    saveUninitialized: false,
    resave: false,
    duration:60*1000
}));

// app.use(express.urlencoded({extended: true}));

app.post('/register',(req,res)=>{
    findUser(req.body.username,req.body.email,req.body.password)
    .then((docs)=>{
        if(docs === null){
            res.send("Username taken!!!");
        }else if (docs === undefined){
            res.status(204).send("Email taken!!!");
        }else{
            res.redirect("/login");
        }
    });
})
app.post("/login",(req,res)=>{
    console.log(req.session);
    authUser(req.body.email,req.body.password)
    .then(docs=>{
        if(docs===null){
            res.status(204).send("wrong email");
        }else{
            user = docs;
            res.redirect("/movieslist");
        } 
    })
    // res.redirect("/movieslist");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{console.log(`server started at port ${PORT}`)});