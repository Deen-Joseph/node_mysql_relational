const authorize = require("../middleware/auth.middleware")


const userController = require('../controllers/users.controller')

const router = require('express').Router()

router.post('/addUser', userController.addUser)

router.post('/addUserData', [authorize.verifyToken], userController.addUserData)

router.get('/getAllusers', [authorize.verifyToken], userController.getAllusers)

router.get('/getOneUser/:id', [authorize.verifyToken], userController.getOneUser)

router.get('/getUserDetails/:id', [authorize.verifyToken], userController.getUserDetails)


module.exports = router;