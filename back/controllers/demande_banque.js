const Sequelize = require("../db.connection");
const Demande = require("../models/demande.model.js")(Sequelize.connection, Sequelize.library);
const Banque = require("../models/banque.model.js")(Sequelize.connection, Sequelize.library);
const Document = require("../models/document.model.js")(Sequelize.connection, Sequelize.library);
const Accepter = require("../models/accepter.model.js")(Sequelize.connection, Sequelize.library);
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
                let accepters = await Accepter.findAll({ where: { id_banque: banque.id_banque, statut : {[Op.not] : -1} }});
                let demandes = [];
                for(let accepter of accepters){
                    let demande = await Demande.findOne({ where: { id_demande: accepter.id_demande } });
                    demandes.push(demande);
                }
                
                res.status(200).send(demandes);
            }
            catch(err){
                res.status(500).send({ message: "Error has occured" });
            }
            
        }
    } catch(err){
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
            res.status(200).send(demande);
            
        }
    }
    catch(err){
        res.send(500).send({ message: "Error has occured" });
    }

}


exports.updateDemande = async(req, res) => {
    try{

    } catch(err){
        res.status(500).send({ message: "Error has occured" });
    }
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
        res.status(200).send({ message: "Demande updated successfully" });
    }
}
