var express = require('express');
var demande = require('../controllers/demande');
var router = express.Router();

/*  Création d'une nouvelle demande */
router.post('/createDemande', demande.createDemande);

/*  Récupération des demandes d'un client */
router.get('/getAllDemandes', demande.getAllDemandes);

/*  Récupération d'une demande d'un client */
router.get('/getSingleDemande/:id_demande', demande.getSingleDemande);

/* Modification d'une demande */
router.put('/updateDemande/:id_demande', demande.updateDemande);

/* Suppression d'une demande */
router.delete('/deleteDemande/:id_demande', demande.deleteDemande);

module.exports = router;

