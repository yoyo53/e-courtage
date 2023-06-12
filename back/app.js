var path = require('path');
const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');


/* Initialize all routers */
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var demandeRouter = require('./routes/demande');

const app = express();
const PORT = process.env.PORT || 3000;
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

/* BEGIN firebase initialization */
const Firebase = require('./firebase.connection');
const bucket = Firebase.bucket;
/* END firebase initialization */
bucket.getFiles().then(([files]) => files.forEach(file => console.log(file.name)))


/* Use all routers */
app.use('/auth', authRouter);
app.use('/demande', demandeRouter);

/* BEGIN db initialization */
const Sequelize = require('./db.connection');
const connection = Sequelize.connection;
/* END db initialization */


try{ 
    connection.authenticate()
}
catch(error){
    console.log("Unable to connect to the database:", error);
}


/* Synchronize database */

const Banque = require("./models/Banque.model.js")(connection, Sequelize.library);
const Client = require("./models/Client.model.js")(connection, Sequelize.library);
const Demande = require("./models/Demande.model.js")(connection, Sequelize.library);
const Document = require("./models/Document.model.js")(connection, Sequelize.library);
const Accepter = require("./models/accepter.model.js")(connection, Sequelize.library);
const SessionClient = require("./models/sessionClient.model.js")(connection, Sequelize.library);
const SessionBanque = require("./models/sessionBanque.model.js")(connection, Sequelize.library);

/* Add db relations */
Demande.sync({force: false}, {alter: true});
Client.sync({force: false}, {alter: true});
Document.sync({force: false}, {alter: true});
Banque.sync({force: false}, {alter: true});
SessionClient.sync({ force: false, alter: true });
SessionBanque.sync({ force: false, alter: true });


Demande.belongsToMany(Document, {as: "Document", through: "Contient", foreignKey: "Id_Demande", timestamps: false});
Demande.belongsToMany(Banque, {as:"Banque", through: Accepter, foreignKey: "Id_Demande"});
Demande.belongsTo(Client, {as: "Owner", foreignKey: "Id_Client"});

Client.hasMany(Demande, {as: "Demande", foreignKey: "Id_Client"});

Document.belongsToMany(Demande, {as:"Demandes", through: "Contient", foreignKey: "Id_Document", timestamps: false});

Banque.belongsToMany(Demande, {as:"Accepted", through: Accepter, foreignKey: "Id_Banque"});

SessionClient.belongsTo(Client, {as: "user", foreignKey: "Id_Client"});
SessionBanque.belongsTo(Banque, {as: "user", foreignKey: "Id_Banque"});

connection.sync()
/* END db relations */


module.exports = app;


