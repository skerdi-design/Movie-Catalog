const Datastore = require("nedb");
const db = new Datastore({filename:"database.db"});
const bcrypt = require("bcryptjs");

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
            console.log(bcrypt.compareSync(password,doc[0].password));
            if(doc.length == 0){
                console.log("wrong email");
                res(null);
            }else if(!(bcrypt.compareSync(password,doc[0].password))){
                console.log("wrong password!!!");
                res(null);
            }else{
                res(doc[0]);
            };
        })
    })
}
function allowUser (sessionid){
    return new Promise((res,rej)=>{
        db.find({_id:sessionid},(err,docs)=>{
            if(err)throw err;
            if(docs.length == 0){
                res(null);
            }else{
                res(docs[0]);
            }
        })
    })
}
module.exports = {findUser,authUser,allowUser};
