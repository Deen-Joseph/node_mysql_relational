const express = require("express");
const authController = require('../controllers/auth.controller')
const verifySignUp = require("../middleware/verify.signup")


const router = express.Router();

router.post('/register',[
    verifySignUp.checkDuplicate,
  ], authController.register)

router.get('/login', authController.login)


module.exports = router;