/* BEGIN db initialization */
const { Op } = require("sequelize");
const Sequelize = require("../db.connection");
const Banque = require("../models/banque.model.js")(Sequelize.connection, Sequelize.library);
const sessions = require("./session.js");

/* END db initialization */


exports.getAllBanques = async(req, res) => {
}

exports.getBanque = async(req, res) => {
    try{
        // Check if token is valid
        var token = req.get("Authorization");

        let session = await sessions.verifyToken(token, "banque");

        if(!session){
            res.status(401).send({ message: "Unauthorized" });
            return;
        }else{
            var banque = await sessions.findByToken(token, "banque");
            res.status(200).send(banque);
        }

    } catch(err){
        res.status(500).send({ message: "Error has occured" });
    }
}

exports.updateBanque = async(req, res) => {
    try {
        // Check if token is valid
        var token = req.get("Authorization");

        let session = await sessions.verifyToken(token, "banque");

        if(!session){
            res.status(401).send({ message: "Unauthorized" });
            return;
        }else{
            var banque = await sessions.findByToken(token, "banque");
            for(let key in req.body){
                banque[key] = req.body[key];
            }
            res.status(200).send(banque);
        }

    } catch(err){
        res.status(500).send({ message: "Error has occured" });
    }
} 

exports.deleteBanque = async(req, res) => {
    try {
        // Check if token is valid
        var token = req.get("Authorization");

        let session = await sessions.verifyToken(token, "banque");

        if(!session){
            res.status(401).send({ message: "Unauthorized" });
            return;
        }else{
            var banque = await sessions.findByToken(token, "banque");
            await Banque.destroy({ where: { id_banque: banque.id_banque } });
        }

    } catch(err){
        res.status(500).send({ message: "Error has occured" });
    }
}

