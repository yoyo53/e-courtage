var express = require('express');
var demande = require('../controllers/demande');
var router = express.Router();

/*  Création d'une nouvelle demande */
router.post('/createDemande', demande.createDemande);

/*  Récupération des demandes d'un client */
router.get('/getAllDemandes', demande.getAllDemandes);

/*  Récupération d'une demande d'un client */
//router.get('/getDemande/:id_demande', demande.getDemande);

module.exports = router;

