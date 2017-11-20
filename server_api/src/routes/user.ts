const userRoute = require('express').Router();
var User = require('./../models/user.model');


userRoute.get('/', (req, res) => {
//   res.status(200).json({ message: 'Connected!' });
  User.find().then((doc:any)=>{
    res.json({ message: doc}); 
  })

  // res.json({ message: 'hooray! welcome to user\'s route ' });   
});

userRoute.post('/create_user', function(req, res) {
  let item = {name : req.body.name,
                username : req.body.username,
                password : req.body.password,
                admin : false
              }
  
  let userModel = new User;
  let save = userModel.save(item);
  
  // res.json({ message: 'hooray! welcome to user\'s route ' });  
  // res.send(item);
  res.json({ message: item}); 
});

module.exports = userRoute;