const Datastore = require("nedb");
const db = new Datastore({filename:"database.db"});

db.loadDatabase((err)=>{
    if(err) throw err;
})

function findUser (username,email,password) {
    const user = {
        username:username,
        email:email,
        password:password,
        movielist:[],
        favourites:[]
    }
    return new Promise((res,rej)=>{
        db.find({username:username},(err,doc)=>{
            if(doc.length == 0){
                db.find({email:email},(err,doc)=>{
                    if(doc.length == 0){
                        res (user);
                        db.insert(user);
                    }else{
                        console.log("place taken!!!");
                        res (undefined);
                    }
                });
            }else{
                res (null);
            }
        });
    })
}
function authUser (email,password) {
    const authuser = {
        email:email,
        password:password
    }
    return new Promise((res,rej)=>{
        db.find({email:email},(err,doc)=>{
            if(doc.length == 0){
                console.log("wrong email");
                res(null);
            }else{
                console.log(doc);
                res(doc[0]);
            }
        })
    })
}
module.exports = {findUser,authUser};
