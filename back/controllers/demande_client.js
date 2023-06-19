const Sequelize = require("../db.connection");
const Demande = require("../models/demande.model.js")(Sequelize.connection, Sequelize.library);
const Document = require("../models/document.model.js")(Sequelize.connection, Sequelize.library);
const Contient = require("../models/contient.model.js")(Sequelize.connection, Sequelize.library);
const Accepter = require("../models/accepter.model.js")(Sequelize.connection, Sequelize.library);
const Banque = require("../models/banque.model.js")(Sequelize.connection, Sequelize.library);
const sessions = require("./session.js");

exports.createDemande = async (req, res) => {
    try{
        // Get Client Id from token
        var token = req.get("Authorization");

        // Verify if user is logged in
        let session = await sessions.verifyToken(token, "client");

        if (!session) {
            res.status(401).send({ message: "Unauthorized" });
            return;
        } else {
            let client = await sessions.findByToken(token, "client");
            // Create new Demande
            let demande = {
                sujet: req.body.sujet,
                nature: req.body.nature,
                type: req.body.type,
                age: req.body.age,
                usage: req.body.usage,
                status_recherche: req.body.status_recherche,
                pays: req.body.pays,
                ville: req.body.ville,
                montant_bien: req.body.montant_bien,
                montant_travaux: req.body.montant_travaux ? req.body.montant_travaux : null,
                frais_notaire: req.body.frais_notaire ? req.body.frais_notaire : null,
                apport_personnel: req.body.apport_personnel,
                commentaire: req.body.commentaire ? req.body.commentaire : null,    
                accompagnement: req.body.accompagnement,
                id_client: client.id_client
            }
            // Save new Demande
            let newDemande = await Demande.create(demande);

            // Link all documents to demande
            for (let id_file of req.body.files) {
                // Save new contient
                await Contient.create({
                    id_demande: newDemande.id_demande,
                    id_document: id_file
                });
            }

            // Make a find all banques
            let banques = await Banque.findAll();
            for (let banque of banques) {
                // Save new accepter
                await Accepter.create({
                    id_demande: newDemande.id_demande,
                    id_banque: banque.id_banque,
                    status: 0 // 0 = En attente, 1 = Pinned by banque, 2 = Accepté, -1 = Refusé
                })
            }
            res.status(200).send({ id_demande: newDemande.id_demande, message: "Demande created successfully" });
        }
    } catch(err){
        res.status(500).send({ message: "Error has occured" });
    }

};

exports.getAllDemandes = async (req, res) => {
    try{
        // Get Client Id from token
        var token = req.get("Authorization");

        // Verify if user is logged in
        let session = await sessions.verifyToken(token, "client");

        if (!session) {
            res.status(401).send({ message: "Unauthorized" });
            return;
        } else {
            let client = await sessions.findByToken(token, "client");
            // Get all demandes
            let demandes = await Demande.findAll({ where: { id_client: client.id_client } });
            for (let demande of demandes) {
                let list_files = [];
                let contients = await Contient.findAll({ where: { id_demande: demande.id_demande } });
                for(let contient of contients){
                    list_files.push(contient.id_document);
                }
                // Add new attribute to demande
                demande.dataValues.files = list_files;
                
            }
            res.status(200).send(demandes);
        }
    } catch(err){
        res.status(500).send({ message: "Error has occured" });
    }

};

exports.getAllDemandesAccepted = async (req, res) => {
    try{
        // Get Client Id from token
        var token = req.get("Authorization");

        // Verify if user is logged in
        let session = await sessions.verifyToken(token, "client");

        if (!session) {
            res.status(401).send({ message: "Unauthorized" });
            return;
        } else {
            let client = await sessions.findByToken(token, "client");
            let demandes = await Demande.findAll({ where: { id_client: client.id_client } });
            let accepted_list = [];
            for (let demande of demandes) {
                let accepted = await Accepter.findOne({ where: { id_demande: demande.id_demande, statut: 2}});

                if(accepted){
                    accepted_list.push(accepted);
                }
                
            }
            res.status(200).send(accepted_list);
        }
    } catch(err){
        res.status(500).send({ message: "Error has occured" + err });
    }

}

exports.getSingleDemande = async (req, res) => {
    try{
        // Get Client Id from token
        var token = req.get("Authorization");

        // Verify if user is logged in
        let session = await sessions.verifyToken(token, "client");

        if (!session) {
            res.status(401).send({ message: "Unauthorized" });
            return;
        } else {
            // Get demande
            let demande = await Demande.findOne({ where: { id_demande: req.params.id_demande } });

            res.status(200).send(demande);
        }
    } catch(err){
        res.status(500).send({ message: "Error has occured" });
    }

}

exports.updateDemande = async (req, res) => {
    try{
        // Get Client Id from token
        var token = req.get("Authorization");

        // Verify if user is logged in
        let session = await sessions.verifyToken(token, "client");

        if(!session){
            res.status(401).send({message: "Unauthorized"});
            return;
        }else{
            // Get demande
            let demande = await Demande.findOne({where: {id_demande: req.params.id_demande}});

            let client = await sessions.findByToken(token, "client");

            // Check if demande exists
            if(!demande){
                res.status(404).send({message: "Demande not found"});
                return;
            }

            // Check if demande belongs to client
            if(demande.id_client != client.id_client){
                res.status(401).send({message: "Unauthorized"});
                return;
            }

            // Update demande
            for(let key in req.body){
                demande[key] = req.body[key];
            }
            // Save demande
            await demande.save();

            if (req.body.files) {
                // Delete all contient
                await Contient.destroy({ where: { id_demande: demande.id_demande } });

                // Link all documents to demande
                for (let id_file of req.body.files) {
                    // Create new contient
                    let contient = {
                        id_demande: demande.id_demande,
                        id_document: id_file
                    }
                    // Save new contient
                    await Contient.create(contient);
                }
            }

            res.status(200).send({id_demande: demande.id_demande, message: "Demande updated successfully"});
        }
    } catch(err){
        res.status(500).send({ message: "Error has occured" });
    }

}

exports.deleteDemande = async (req, res) => {
    try{
        // Get Client Id from token
        var token = req.get("Authorization");

        // Verify if user is logged in
        let session = await sessions.verifyToken(token, "client");

        if(!session){
            res.status(401).send({message: "Unauthorized"});
            return;
        }else{
            // Get demande
            let demande = await Demande.findOne({where: {id_demande: req.params.id_demande}});

            let client = await sessions.findByToken(token, "client");

            // Check if demande exists
            if(!demande){
                res.status(404).send({message: "Demande not found"});
                return;
            }

            // Check if demande belongs to client
            if(demande.id_client != client.id_client){
                res.status(401).send({message: "Unauthorized"});
                return;
            }

            // Delete demande
            await demande.destroy();

            res.status(200).send({message: "Demande deleted successfully"});
        }
    } catch(err){
        res.status(500).send({ message: "Error has occured" });
    }
    

    

}




