const Datastore = require("nedb");
const db = new Datastore({filename:"database.db"});
let users = [];

db.loadDatabase((err)=>{
    if(err) throw err;
    // console.log("database created!!!");
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
                res (user)
                db.insert(user);
            }else{
                console.log("place taken!!!");
                res (null);
            }
        });
    })
    db.find({username:username},(err,doc)=>{
        if(doc.length == 0){
            users.push(user);
            db.insert(user);
        }else{
            console.log("place taken!!!");
            return;
        }
    });
    return users;
}
module.exports = findUser;
