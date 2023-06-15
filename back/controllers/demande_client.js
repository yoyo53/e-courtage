const Sequelize = require("../db.connection");
const Demande = require("../models/demande.model.js")(Sequelize.connection, Sequelize.library);
const sessions = require("./session.js");

//TODO
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
            montant_travaux: req.body.montant_travaux,
            frais_notaire: req.body.frais_notaire ? req.body.frais_notaire : null,
            apport_personnel: req.body.apport_personnel,
            commentaire: req.body.commentaire ? req.body.commentaire : null,
            id_client: client.id_client
        }
        // Save new Demande
        let newDemande = await Demande.create(demande);
        // TODO Link all files to demande

        res.status(200).send({ message: "Demande created successfully" });
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

        res.status(200).send(demandes);
    }
};

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

        res.status(200).send({message: "Demande updated successfully"});
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




