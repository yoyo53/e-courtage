const Sequelize = require("../db.connection");

const sessions = require("./session.js");

const Client = require("../models/client.model.js")(Sequelize.connection, Sequelize.library);
const Banque = require("../models/banque.model.js")(Sequelize.connection, Sequelize.library);
const Demande = require("../models/demande.model.js")(Sequelize.connection, Sequelize.library);
const Admin = require("../models/admin.model.js")(Sequelize.connection, Sequelize.library);
const SessionAdmin = require("../models/sessionAdmin.model.js")(Sequelize.connection, Sequelize.library);


exports.getAllClients = async (req, res) => {
    try{
        // Get Client Id from token
        var token = req.get("Authorization");

        // Verify if user is logged in
        let session = await sessions.verifyToken(token, "admin");

        if (!session) {
            res.status(401).send({ message: "Unauthorized" });
            return;
        } else {
            let clients = await Client.findAll();
            res.status(200).send(clients);
        }
    } catch(err){
        res.status(500).send({ message: "Error has occured" });
    }

}

exports.getAllBanques = async (req, res) => {
    try{
        // Get Client Id from token
        var token = req.get("Authorization");

        // Verify if user is logged in
        let session = await sessions.verifyToken(token, "admin");

        if (!session) {
            res.status(401).send({ message: "Unauthorized" });
            return;
        } else {
            let banques = await Banque.findAll();
            res.status(200).send(banques);
        }
    } catch(err){
        res.status(500).send({ message: "Error has occured" });
    }

}

exports.getAllDemandes = async (req, res) => {
    try{
        // Get Client Id from token
        var token = req.get("Authorization");

        // Verify if user is logged in
        let session = await sessions.verifyToken(token, "admin");

        if (!session) {
            res.status(401).send({ message: "Unauthorized" });
            return;
        } else {
            let demandes = await Demande.findAll();
            res.status(200).send(demandes);
        }
    } catch(err){
        res.status(500).send({ message: "Error has occured" });
    }
}

exports.deleteClient = async (req, res) => {
    try{
        // Get Client Id from token
        var token = req.get("Authorization");

        // Verify if user is logged in
        let session = await sessions.verifyToken(token, "admin");

        if (!session) {
            res.status(401).send({ message: "Unauthorized" });
            return;
        } else {
            let client = await Client.findOne({ where: { id_client: req.params.id_client } });
            await client.destroy();
            res.status(200).send({ message: "Client deleted successfully" });
        }
    } catch(err){
        res.status(500).send({ message: "Error has occured" });
    }
}

exports.deleteBanque = async (req, res) => {
    try{
        // Get Client Id from token
        var token = req.get("Authorization");

        // Verify if user is logged in
        let session = await sessions.verifyToken(token, "admin");

        if (!session) {
            res.status(401).send({ message: "Unauthorized" });
            return;
        } else {
            let banque = await Banque.findOne({ where: { id_banque: req.params.id_banque } });
            await banque.destroy();
            res.status(200).send({ message: "Banque deleted successfully" });
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
        let session = await sessions.verifyToken(token, "admin");

        if (!session) {
            res.status(401).send({ message: "Unauthorized" });
            return;
        } else {
            let demande = await Demande.findOne({ where: { id_demande: req.params.id_demande } });
            await demande.destroy();
            res.status(200).send({ message: "Demande deleted successfully" });
        }
    } catch(err){
        res.status(500).send({ message: "Error has occured" });
    }
}

exports.activateBanque = async (req, res) => {
    try{
        // Get Client Id from token
        var token = req.get("Authorization");

        // Verify if user is logged in
        let session = await sessions.verifyToken(token, "admin");

        if (!session) {
            res.status(401).send({ message: "Unauthorized" });
            return;
        } else {
            let banque = await Banque.findOne({ where: { id_banque: req.params.id_banque } });
            banque.account_status = true;
            await banque.save();
            res.status(200).send({ message: "Banque activated successfully" });
        }
    } catch(err){
        res.status(500).send({ message: "Error has occured" });
    }
}
