var express = require('express');
var document = require('../controllers/document');
var router = express.Router();
var multer = require('multer');

/*  Création d'un nouveau document */
router.post('/addDocument', multer().single("file"), document.addDocument);

/* Suppression d'un document */
router.delete('/deleteDocument/:id_document', document.deleteDocument);

/* Récupération des documents d'un client */
router.get('/getAllDocuments', document.getAllDocuments);

/* Récupération d'un document d'un client */
router.get('/getSingleDocument/:id_document', document.getSingleDocument);

/* Modification d'un document */
router.patch('/updateDocument/:id_document',multer().single("file"), document.updateDocument);

/* Supression de tous les documents d'un client */
router.delete('/deleteAllDocuments', document.deleteAllDocuments);

/* Téléchargement d'un document */
router.get('/downloadDocument/:id_document', document.downloadDocument);

/* Téléchargement de tous les documents d'un client */
router.get('/downloadAllDocuments', document.downloadAllDocuments);

/* Téléchargement de tous les documents côtés banque */
router.get('/downloadAllDocumentsBanque', document.downloadAllDocumentsBanque);

module.exports = router;        