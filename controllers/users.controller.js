const db = require('../models')


// Main model

const Users = db.users


//  Create  Users

const addUser = async (req, res)=> {

   let info = req.body

   const  users = await Users.create(info)
   res.status(200).send(users)
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
    getAllusers,
    getOneUser,
    getUserDetails
}