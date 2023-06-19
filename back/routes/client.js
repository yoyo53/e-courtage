var express = require('express');
var client = require('../controllers/client');
var router = express.Router();


router.get('/getClient', client.getClient);
router.patch('/patchClient', client.patchClient);
router.delete('/deleteClients', client.deleteClients);



module.exports = router;