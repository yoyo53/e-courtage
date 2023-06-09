
const express = require('express');


const app = express();
const PORT = 3000;
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

/* BEGIN firebase initialization */
/*
const firebaseConfig = require("./firebase.connection");
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const firebaseApp = initializeApp(firebaseConfig.connectionFirebase);
const analytics = getAnalytics(firebaseApp);
*/




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

const Banque = require("./models/banque.model")(connection, Sequelize.library);
const Client = require("./models/client.model.js")(connection, Sequelize.library);
const Demande = require("./models/demande.model.js")(connection, Sequelize.library);
const Document = require("./models/document.model.js")(connection, Sequelize.library);
const Accepter = require("./models/accepter.model.js")(connection, Sequelize.library);

/* Add db relations */
Demande.sync({force: true}, {alter: true});
Client.sync({force: true}, {alter: true});
Document.sync({force: true}, {alter: true});
Banque.sync({force: true}, {alter: true});

Demande.belongsToMany(Document, {as: "Document", through: "Contient", foreignKey: "Id_Demande", timestamps: false});
Demande.belongsToMany(Banque, {as:"Banque", through: Accepter, foreignKey: "Id_Demande"});
Demande.belongsTo(Client, {as: "Owner", foreignKey: "Id_Client"});

Client.hasMany(Demande, {as: "Demande", foreignKey: "Id_Client"});

Document.belongsToMany(Demande, {as:"Demandes", through: "Contient", foreignKey: "Id_Document", timestamps: false});

Banque.belongsToMany(Demande, {as:"Accepted", through: Accepter, foreignKey: "Id_Banque"});

connection.sync()
/* END db relations */


module.exports = app;


