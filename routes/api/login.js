const Login = require('../../db').Users
const route = require('express').Router()
var jwt = require('jsonwebtoken');

route.get('/', (req, res) => {
    // We want to send an array of all users
    // From our database here

    Login.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrive users"
            })
        })

})
route.post('/', function(req, res) {
  Login.findAll({
      where:{
    email : req.body.email,
    password : req.body.password,
      }
  })
        .then(function(users){
           if(users.length==0){
               res.status(201).send({message:"User does not exist"})

           }
        else{
              //        var obj = users[0]['email']
            // var pass = users[0]['Password']
            //  var myToken = jwt.sign({ users: obj , password: pass },
                //                      'Navdeep',
              //                       { expiresIn: 24 * 60 * 60 });
              res.status(201).send(users);
        }
        })
     .catch((err) => {
            res.status(500).send({
                error: "Could not retrive users"
            })
        })
});

  


/*route.post('/', function(req, res) {
  Login.findAll({
      where:{
    email: req.body.email,
    password: req.body.password,      
  },
       function (err, user) {
    if (err) return res.status(500).send("There was a problem registering the user.")
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  }); 
});*/

 /* }).then((users) => { 
                   var token = jwt.sign({ email: users.email }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
                   
               })
        
    .catch((err) => {
            res.status(500).send({
                error: "Could not retrive users"
            })
        })
    
})*/

exports = module.exports = route