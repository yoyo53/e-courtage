var express = require('express');
var banque = require('../controllers/banque');
var router = express.Router();


/*  Récupération infos banque */
router.get('/getBanque', banque.getBanque);

/*  Modification infos banque */
router.patch('/updateBanque', banque.updateBanque);

/* Supression banque */
router.delete('/deleteBanque', banque.deleteBanque);



module.exports = router;    