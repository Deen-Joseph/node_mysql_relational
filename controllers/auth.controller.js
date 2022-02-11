const db = require('../models')
const  jwt  =  require('jsonwebtoken');
const  bcrypt  =  require('bcryptjs'); 
const config = require("../config/authkey")

const register = async (req, res)=> {
    const salt = await bcrypt.genSalt(10);
  var usr = {
    username : req.body.first_name,
    email : req.body.email,
    password : await bcrypt.hash(req.body.password, salt)
  };
  created_user = await db.Users.create(usr)
  .catch(err => {
    res.status(500).send({ message: err.message });
  });;
  res.status(201).json(created_user);
 }



const login = async (req, res)=> {
    
    const user = await db.Users.findOne({ where : {email : req.body.email }});
    if(user){
       const password_valid = await bcrypt.compare(req.body.password,user.password);
       if(password_valid){
           token = jwt.sign({ "id" : user.id,"email" : user.email,"username":user.username },config.secret);
           res.status(200).json({ token : token });
       } else {
         res.status(400).json({ error : "Password Incorrect" });
       }
     
     }else{
       res.status(404).json({ error : "User does not exist" });
     }
     
}
       

 module.exports ={
    register,
    login
}