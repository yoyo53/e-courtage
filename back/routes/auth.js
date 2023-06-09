var express = require('express');
var auth = require('../controllers/auth');
var router = express.Router();

/*  Verification of the user's credentials */
router.post('/login', auth.login);


/*  Registration of a new user */
router.post('/register', auth.register);
