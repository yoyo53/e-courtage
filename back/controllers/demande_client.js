const { listenerCount } = require("nodemailer/lib/xoauth2");
const Sequelize = require("../db.connection");
const Demande = require("../models/demande.model.js")(Sequelize.connection, Sequelize.library);
const Document = require("../models/document.model.js")(Sequelize.connection, Sequelize.library);
const Contient = require("../models/contient.model.js")(Sequelize.connection, Sequelize.library);
const Accepter = require("../models/accepter.model.js")(Sequelize.connection, Sequelize.library);
const Banque = require("../models/banque.model.js")(Sequelize.connection, Sequelize.library);
const sessions = require("./session.js");
const { list } = require("postcss");

exports.createDemande = async (req, res) => {
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
            // Create new contient
            let contient = {
                id_demande: newDemande.id_demande,
                id_document: id_file
            }
            // Save new contient
            await Contient.create(contient);
        }

        // Make a find all banques
        let banques = await Banque.findAll();
        for (let banque of banques) {
            // Create new accepter
            let accepter = {
                id_demande: newDemande.id_demande,
                id_banque: banque.id_banque,
                status: 0 // 0 = En attente, 1 = Pinned by banque, 2 = Accepté, -1 = Refusé
            }
            // Save new accepter
            await Accepter.create(accepter);
        }
        res.status(200).send({ id_demande: newDemande.id_demande, message: "Demande created successfully" });
    }
};

exports.getAllDemandes = async (req, res) => {
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
};

exports.getAllDemandesAccepted = async (req, res) => {
    // Get Client Id from token
    var token = req.get("Authorization");

    // Verify if user is logged in
    let session = await sessions.verifyToken(token, "client");

    if (!session) {
        res.status(401).send({ message: "Unauthorized" });
        return;
    } else {
        let client = await sessions.findByToken(token, "client");
        // Get all demandes accepted
        let accepted = await Accepter.findAll({ where: { id_client: client.id_client, status: 2 } });
        let demandes = [];
        for (let accept of accepted) {
            let demande = await Demande.findOne({ where: { id_demande: accept.id_demande } });
            demandes.push(demande);
        }
        res.status(200).send(demandes);
    }
}

exports.getSingleDemande = async (req, res) => {
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
}

exports.updateDemande = async (req, res) => {
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
}

exports.deleteDemande = async (req, res) => {
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

    

}




