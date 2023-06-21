var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")
const auth = require("../auth/Auth")

/* POST sign up. */
router.post('/add-user', userController.signup)

/* POST sign up. */
router.post('/add-google-user', userController.googleSignup)

/* POST login. */
router.post('/login-user', userController.login)

/* POST add order. */
router.post('/add-order',auth.Auth, userController.addOrder)

/* GET view order. */
router.get('/get-order',auth.Auth, userController.getOrder)



module.exports = router;
