var express = require('express');
var demande_client = require('../controllers/demande_client');
var router = express.Router();

/*  Création d'une nouvelle demande */
router.post('/createDemande', demande_client.createDemande);

/*  Récupération des demandes d'un client */
router.get('/getAllDemandes', demande_client.getAllDemandes);

/*  Récupération d'une demande d'un client */
router.get('/getSingleDemande/:id_demande', demande_client.getSingleDemande);

/* Modification d'une demande */
router.patch('/updateDemande/:id_demande', demande_client.updateDemande);

/* Suppression d'une demande */
router.delete('/deleteDemande/:id_demande', demande_client.deleteDemande);

module.exports = router;

