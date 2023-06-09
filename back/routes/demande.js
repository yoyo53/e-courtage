var express = require('express');
var demande = require('../controllers/demande');
var router = express.Router();

/*  Création d'une nouvelle demande */
router.post('/createDemande', demande.createDemande);

/*  Récupération des demandes d'un client */
router.get('/getDemandes/:id', demande.getDemandes);

