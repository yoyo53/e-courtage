var express = require('express');
var demande_banque = require('../controllers/demande_banque');
var router = express.Router();

/*  Récupération des demandes d'une banque */
router.get('/getAllDemandes', demande_banque.getAllDemandes);

/*  Récupération d'une demande d'une banque */
router.get('/getSingleDemande/:id_demande', demande_banque.getSingleDemande);

/* Modification d'une demande */
router.patch('/updateDemande/:id_demande', demande_banque.updateDemande);



module.exports = router;