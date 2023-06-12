/* BEGIN db initialization */
const { Op } = require("sequelize");
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const Sequelize = require("../db.connection");
const SessionClient = require("../models/sessionClient.model")(Sequelize.connection, Sequelize.library);
const SessionBanque = require("../models/sessionBanque.model")(Sequelize.connection, Sequelize.library);

// Create a new Session
exports.createSession = async (id, userType) => {

    let validity = moment().add(1, 'days').format()
    if (userType == "banque") {
        const obj = {
            token: uuidv4(),
            validUntil: validity,
            Id_Banque: id
        };
        // Save new Session
        // Save in the database
        var result = {};
        await SessionBanque.create(obj)
            .then(data => {
                result = data
            })
            .catch(e => {
                console.log("error", e)
            });
    } else{
        const obj = {
            token: uuidv4(),
            validUntil: validity,
            Id_Client: id
        };
        // Save new Session
        // Save in the database
        var result = {};
        await SessionClient.create(obj)
            .then(data => {
                result = data
            })
            .catch(e => {
                console.log("error", e)
            });
    }
    return result;
}

// Verify if user is logged in
exports.verifyToken = async (token, userType) => {
    if(token){
        let session = await this.findByToken(token, userType)
        if(session){
            let isTokenExpired = (new Date(session.validUntil) - new Date()) <= 0
            if(!isTokenExpired){
                console.log("token is valid")
                return true
            }
            console.log("token is expired")
            return false
        }
    console.log("token not found")
    return false
    }
}




// Get session by token
exports.findByToken = async (token, userType) => {
    var condition = token ? { token: { [Op.eq]: token } } : null;
    var result = {};
    if (userType == "banque") {
        await SessionBanque.findOne({ where: condition })
        .then(data => {
            result = data
        })
        .catch(e => {
            console.log("Error", e)
        })
    } else{
        await SessionClient.findOne({ where: condition })
        .then(data => {
            result = data
        })
        .catch(e => {
            console.log("Error", e)
        })
    }
    return result
};



exports.deleteExpiredToken = async () => {
    var currentDate = moment().format();
    var condition = {where: {validUntil: {[Op.lte]: currentDate}}}
    await SessionClient.findAll(condition)
    .then(data => {
        for(var i=0; i<data.length; i++){
            this.delete(data[i].id)
        }
    })
    await SessionBanque.findAll(condition)
    .then(data => {
        for(var i=0; i<data.length; i++){
            this.delete(data[i].id)
        }
    })
}

