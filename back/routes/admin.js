var express = require('express');
var admin = require('../controllers/admin');
var router = express.Router();


/* Get all clients */
router.get('/getAllClients', admin.getAllClients);

/* Get all banques */
router.get('/getAllBanques', admin.getAllBanques);

/* Get all demandes */
router.get('/getAllDemandes', admin.getAllDemandes);

/* Update a client */
router.patch('/updateClient/:id_client', admin.updateClient);

/* Update a banque */
router.patch('/updateBanque/:id_banque', admin.updateBanque);

/* Delete a client */
router.delete('/deleteClient/:id_client', admin.deleteClient);

/* Delete a banque */
router.delete('/deleteBanque/:id_banque', admin.deleteBanque);

/* Delete a demande */
router.delete('/deleteDemande/:id_demande', admin.deleteDemande);

/* Activate banque */
router.put('/activateBanque/:id_banque', admin.activateBanque);






module.exports = router;