const express = require("express");
const authController = require('../controllers/auth.controller')


const router = express.Router();

router.post('/register',[
    verifySignUp.checkDuplicate,
  ], authController.register)

router.get('/login', authController.login)


module.exports = router;