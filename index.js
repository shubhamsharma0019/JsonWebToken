const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const jwtPassword = "123456";
app.use(express.json());

const ALL_USERS = [
    {
        username:"varun@gmail.com",
        password:"123",
        name:"varun singh"
    },
    {
        username:"mahesh@gamil.com",
        password:"123432",
        name:"mahesh kumar"
    },
    {
        username:"shubham@gmail.com",
        password:"123221",
        name:"shubham"
    },
];

function userExist(username, password){
    let userExist = false;
    for(let i = 0 ;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExist = true;
        }
    }
    return userExist;

}

app.post('/signin',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExist(username,password)){
        return res.status(403).json({
            msg:"User dosent exist in our in memory db"
        })
    }
    var token = jwt.sign({username:username},jwtPassword);
    return res.json({
        token,
    });
});

app.get('/users',function(req,res){
    const token = req.headers.authorization;
    const decoded = jwt.verify(token,jwtPassword);
    const username = decoded.username;
   
    res.json({
        users:ALL_USERS
    })
});
app.listen(3000)