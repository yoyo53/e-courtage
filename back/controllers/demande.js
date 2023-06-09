const Sequelize = require("../db.connection");
const Demande = require("../models/demande.model.js")(Sequelize.connection, Sequelize.library);

exports.createDemande = async (req, res) => {
    // Create new Demande
    let demande = {
        Sujet: req.body.Sujet,
        Montant: req.body.Montant,
        Duree: req.body.Duree,
        Raison: req.body.Raison,
        Id_Client: req.body.Id_Client
    }
    // Save new Demande
    let newDemande = await Demande.create(demande);
    res.status(200).send({ message: "Demande created successfully" });
};