const Sequelize = require("../db.connection");
const Demande = require("../models/demande.model.js")(Sequelize.connection, Sequelize.library);
const Banque = require("../models/banque.model.js")(Sequelize.connection, Sequelize.library);
const Client = require("../models/client.model.js")(Sequelize.connection, Sequelize.library);
const Document = require("../models/document.model.js")(Sequelize.connection, Sequelize.library);
const Accepter = require("../models/accepter.model.js")(Sequelize.connection, Sequelize.library);
const Contient = require("../models/contient.model.js")(Sequelize.connection, Sequelize.library);
const mail = require("./mail.js")
const sessions = require("./session.js");
const { Op } = require("sequelize");

exports.getAllDemandes = async(req, res) => {
    try{
        // Check if token is valid
        var token = req.get("Authorization");

        let session = await sessions.verifyToken(token, "banque");

        if(!session){
            res.status(401).send({ message: "Unauthorized" });
            return;
        }else{
            try{
                var banque = await sessions.findByToken(token, "banque");
                // Get all demandes
                let accepters = await Accepter.findAll({ where: { id_banque: banque.id_banque }});
                let demandes = [];
                for(let accepter of accepters){
                    let demande = await Demande.findOne({ where: { id_demande: accepter.id_demande } });
                    let client = await Client.findOne({ where: { id_client: demande.id_client } });
                    if(client){
                        delete client.dataValues.password;
                        delete client.dataValues.id_client;
                        delete client.dataValues.account_status;
                    }
                    demande.dataValues.client = client;
                    demande.dataValues.statut = accepter.statut;
                    let list_files = [];
                    let contients = await Contient.findAll({ where: { id_demande: demande.id_demande } });
                    for(let contient of contients){
                        list_files.push(await Document.findOne({ where: { id_document: contient.id_document } }));
                    }
                    // Add new attribute to demande
                    demande.dataValues.files = list_files;
                    demandes.push(demande);
                }
                
                res.status(200).send(demandes);
            }
            catch(err){
                console.log(err);
                res.status(500).send({ message: "Error has occured" });
            }
            
        }
    } catch(err){
        console.log(err);
        res.status(500).send({ message: "Error has occured" });
    }
    
}

exports.getSingleDemande = async(req, res) => {
    try{
        // Check if token is valid
        var token = req.get("Authorization");

        let session = await sessions.verifyToken(token, "banque");

        if(!session){
            res.status(401).send({ message: "Unauthorized" });
            return;
        }else{
            var banque = await sessions.findByToken(token, "banque");
            // Get single demande
            let accepter = await Accepter.findOne({ where: { id_banque: banque.id_banque, id_demande: req.params.id_demande } });
            let demande = await Demande.findOne({ where: { id_demande: accepter.id_demande } });
            let list_files = [];
            let contients = await Contient.findAll({ where: { id_demande: demande.id_demande } });
            for(let contient of contients){
                list_files.push(await Document.findOne({ where: { id_document: contient.id_document } }));
            }
            // Add new attribute to demande
            demande.dataValues.files = list_files;
            res.status(200).send(demande);
            
        }
    }
    catch(err){
        res.send(500).send({ message: "Error has occured" });
    }

}


exports.updateDemande = async(req, res) => {
    try{
        // Check if token is valid
        var token = req.get("Authorization");

        let session = await sessions.verifyToken(token, "banque");

        if(!session){
            res.status(401).send({ message: "Unauthorized" });
            return;
        }else{
            var banque = await sessions.findByToken(token, "banque");
            // Get single demande
            let accepter = await Accepter.findOne({ where: { id_banque: banque.id_banque, id_demande: req.params.id_demande } });
            for(var key in req.body){
                accepter[key] = req.body[key];
            }
            let demande = await Demande.findOne({ where: { id_demande: accepter.id_demande } });
            let client = await Client.findOne({ where: { id_client: demande.id_client } });
            if(accepter.statut == 2){
                mail.sendAgreementMail(client.email, client.nom, demande.sujet);
            }
            await accepter.save();
            res.status(200).send({ message: "Demande updated successfully" });
        }
    } catch(err){
        res.status(500).send({ message: "Error has occured :" + err.message });
    }
}

exports.getDemandesNewAccount = async function getDemandesNewAccount(id_banque) {
    console.log(id_banque)
    
    let demandes = await Demande.findAll();
    // Create 
    for(let demande of demandes){
        // Create Accepter
        await Accepter.create({
            id_banque: id_banque,
            id_demande: demande.id_demande,
            statut: 0
        });
    }
}
