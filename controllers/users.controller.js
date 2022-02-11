const db = require('../models')
const { sequelize } = require("../models");

// Main model

const Users = db.users


//  Create  Users

const addUser = async (req, res)=> {

   let info = req.body

   const  users = await Users.create(info)
   res.status(200).send(users)
}



const addUserData = async (req,res) =>{

    transaction = await sequelize.transaction();
    const UserData = req.body;
    

    const salt = await bcrypt.genSalt(10);

    const hash_password = await bcrypt.hash(UserData.password, salt);

    const user = {
        username: UserData.username,
        email: UserData.email,
        password: hash_password,
      };
      const createdUser = await db.User.create(user, { transaction });
      if (!createdUser) {
        await transaction.rollback();
        return res.status(400).json({ message: "User Cannot be created" });
      }
  
      if (!contactInfo) {
        await transaction.commit();
        return res.status(200).json({ message: "User created successfully" });
      }
  
      const createdUserId = createdUser.id;
      console.log(createdUserId, "id of created user");
  
      const contact = {
        phone_number: contactInfo.phone_number,
        userId: createdUserId,
      };
  
      const createdContact = await db.Contacts.create(contact, { transaction });
      if (!createdContact) {
        await transaction.rollback();
        return res.status(400).json({ message: "Contact Cannot be created" });
      }
  
      if (!contactAddress) {
        await transaction.commit();
        return res.status(200).json({ message: "User created successfully" });
      }
  
      const createdContactId = createdContact.id;
      console.log(createdContactId, "id of created contact");
  
      const address = {
        address_line1: contactAddress.addressLine1,
        address_line2: contactAddress.addressLine2,
        state: contactAddress.state,
        country: contactAddress.country,
        contactsId: createdContactId,
      };
  
      const createdAddress = await db.Address.create(address, { transaction });
      if (!createdAddress) {
        await transaction.rollback();
        return res.status(400).json({ message: "Address Cannot be created" });
      }
  
      console.log("success");
      await transaction.commit();
  
      res.status(200).json({ message: "User created successfully" });    
    
}


//  Get Users


const getAllusers = async (req,res)=>{

   let  users = await Users.findAll({ })
   res.status(200).send(users)
}


//get single User

const getOneUser = async (req,res)=>{

   let id = req.params.id
   let  users =  await Users.findbyPk({
       where:{id:id}
   })
   res.status(200).send(users)
}

const getUserDetails = async(req,res)=>{

    let id = req.params.id
    const data = await Users.findAll({
        includes: [{
            model: Contacts,
            as: 'contacts'
        }],
        where: {id:id}
    })
res.status(200).send(data)
}


// Update


// const Updateclubs = async (req,res)=>{

//    let id = req.params.id
   
//    const clubs = await Clubs.update(req.body,{ where:{id:id}})

//    res.status(200).send(clubs)

// }

// //delete single User

// const Deleteclubs = async (req,res)=>{

//    let id = req.params.id
//    let  clubs = await Clubs.destroy({ where:{id:id} })
//    res.status(200).send("club is deleted")
// }

module.exports ={
    addUser,
    addUserData,
    getAllusers,
    getOneUser,
    getUserDetails
}