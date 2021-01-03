const express = require("express");
const app = express();
const session = require("express-session");
const {findUser,authUser,allowUser} = require("./utils.js");


let user;

app.use(session({
    secret:"hellocookie",
    saveUninitialized: false,
    resave: false,
}));
const root = {root:"./public"};


// app.use("/movieslist",(req,res,next)=>{
//     console.log(req.session);
//     next();
// })

// app.use(express.static('public'));

app.use(express.json({limit:'1mb'}));


// app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.sendFile("index.html",root);
})
app.get("/css",(req,res)=>{
    res.sendFile("style.css",root);
})


app.get("/register",(req,res)=>{
    res.sendFile("./register/index.html",root);
})
app.get("/register/css",(req,res)=>{
    res.sendFile("/register/style.css",root);
})
app.get("/register/js",(req,res)=>{
    res.sendFile("/register/script.js",root);
})


app.get("/login",(req,res)=>{
    res.sendFile("./login/index.html",root);
})
app.get("/login/css",(req,res)=>{
    res.sendFile("/login/style.css",root);
})
app.get("/login/js",(req,res)=>{
    res.sendFile("/login/script.js",root);
})



app.get("/movieslist",(req,res)=>{
    if(!(req.session && req.session.userId)){
        res.redirect("/login");
    }
    allowUser(req.session.userId)
    .then(doc=>{
        // console.log(user);
        if(doc === null){
            res.redirect("/login");
        }else{
            //setting the user variable as the one that db found
            user=doc;
            res.sendFile("./movieslist/index.html",root);
        }
    })
    .catch(err=>{
        console.log(err);
    });
})
app.get("/movieslist/css",(req,res)=>{
    res.sendFile("/movieslist/style.css",root);
})
app.get("/movieslist/js",(req,res)=>{
    res.sendFile("/movieslist/script.js",root);
})


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
    authUser(req.body.email,req.body.password)
    .then(docs=>{
        if(docs===null){
            res.status(204).send("wrong email");
        }else{
            user = docs;
            req.session.userId = user._id;
            req.session.cookie.maxAge = 1000*1000000;
            console.log(user);
            res.redirect("/movieslist");
        } 
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{console.log(`server started at port ${PORT}`)});