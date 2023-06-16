var express = require('express');
var client = require('../controllers/client');
var router = express.Router();


router.get('/getClients', client.getClients);
router.patch('/patch', client.patch);
router.delete('/deleteClients', client.deleteClients);



module.exports = router;