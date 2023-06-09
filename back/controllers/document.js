var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
const storage = require('../firebase.connection').storage;


function sendFile(){
    try{
        await storage.upload("./documents", {
            

    }

}