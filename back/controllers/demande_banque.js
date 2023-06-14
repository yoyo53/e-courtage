const Sequelize = require("../db.connection");
const Demande = require("../models/Demande.model.js")(Sequelize.connection, Sequelize.library);
const Banque = require("../models/banque.model.js")(Sequelize.connection, Sequelize.library);
const Accepter = require("../models/accepter.model.js")(Sequelize.connection, Sequelize.library);
const sessions = require("./session.js");
const file = require("./file.js");

exports.getAllDemandes = async(req, res) => {
    // Check if token is valid
    var token = req.get("Authorization");

    let session = await sessions.verifyToken(token, "banque");

    if(!session){
        res.status(401).send({ message: "Unauthorized" });
        return;
    }else{
        var banque = await sessions.findByToken(token, "banque");
        // Get all demandes
        let accepters = await Accepter.findAll({ where: { id_banque: banque.id_banque, status : {[Op.not] : -1} }});
        let demandes = await Demande.findAll({ where: { id_demande: accepters.id_demande } });
        res.status(200).send(demandes);
    }
}

exports.getSingleDemande = async(req, res) => {
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
        res.status(200).send(demande);
    }
}

exports.downloadDemande = async(req, res) => {
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
        //file.downloadFile(res, demande.path);
    }
}

exports.updateDemande = async(req, res) => {
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
        await accepter.save();
    }
}
