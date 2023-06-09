
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


/* Add db relations */
/*
Demande.hasMany(Document, {as: "Documents", foreignKey: "Id_Demande"});
Demande.hasMany(Banque, {as: "Banques", foreignKey: "Id_Banque"});
Demande.belongsTo(Client, {as: "Owner", foreignKey: "Id_Client"});
Demande.sync({force: false}, {alter: true});

Client.hasMany(Demande, {as: "Demande", foreignKey: "Id_Client"});
Client.sync({force: false}, {alter: true});

Document.hasMany(Demande, {as: "Demand", foreignKey: "Id_Document"});
Document.sync({force: false}, {alter: true});

Banque.hasMany(Demande, {as: "Demandes", foreignKey: "Id_Banque"});
Banque.sync({force: false}, {alter: true});
*/



module.exports = app;


