var express = require('express');
var auth = require('../controllers/auth');
var router = express.Router();

/*  Vérification des credentials clients */
router.post('/loginClient', auth.loginClient);

/*  Vérification des credentials banque */
router.post('/loginBanque', auth.loginBanque);

/* Vérification des credentials admin */
router.post('/loginAdmin', auth.loginAdmin);

/*  Enregistrement d'un nouveau client */
router.post('/registerClient', auth.registerClient);

/*  Enregistrement d'un nouvelle banque */
router.post('/registerBanque', auth.registerBanque);

/* Vérification d'un compte client */
router.get('/verifyClient/:token', auth.verifyClient);

/* Vérification d'un token utilisateur */
router.get('/verifyToken/:token', auth.verifyToken);

module.exports = router;
