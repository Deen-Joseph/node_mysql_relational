const userController = require('../controllers/users.controller')
const addressController = require('../controllers/address.controller')
const contactController = require('../controllers/contact.controller')

const router = require('express').Router()

router.post('/addUser', userController.addUser)

router.get('/getAllusers', userController.getAllusers)

router.get('/getOneUser/:id', userController.getOneUser)

router.get('/getUserDetails/:id', userController.getUserDetails)


module.exports = router