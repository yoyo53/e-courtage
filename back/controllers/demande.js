const Sequelize = require("../db.connection");
const Demande = require("../models/Demande.model.js")(Sequelize.connection, Sequelize.library);
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
        // Create new Demande
        let demande = {
            sujet: req.body.sujet,
            montant: req.body.montant,
            duree: req.body.duree,
            raison: req.body.raison,
            id_client: session.id_client
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
        // Get all demandes
        let demandes = await Demande.findAll({ where: { id_client: session.id_client } });

        res.status(200).send(demandes);
    }
};

exports.getAllDemande = async (req, res) => {
}


