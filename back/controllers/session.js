/* BEGIN db initialization */
const { Op } = require("sequelize");
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const Sequelize = require("../db.connection");
const SessionClient = require("../models/sessionClient.model")(Sequelize.connection, Sequelize.library);
const SessionBanque = require("../models/sessionBanque.model")(Sequelize.connection, Sequelize.library);
const SessionAdmin = require("../models/sessionAdmin.model")(Sequelize.connection, Sequelize.library);

// Create a new Session
exports.createSession = async (id, userType) => {

    let validity = moment().add(1, 'days').format()
    if (userType == "banque") {
        const obj = {
            token: uuidv4(),
            valid_until: validity,
            id_banque: id
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
    } else if (userType == "admin") {
        const obj = {
            token: uuidv4(),
            valid_until: validity,
            id_admin: id
        };
        // Save new Session
        // Save in the database
        var result = {};
        await SessionAdmin.create(obj)
            .then(data => {
                result = data
            })
            .catch(e => {
                console.log("error", e)
            });
    } 
    else{
        const obj = {
            token: uuidv4(),
            valid_until: validity,
            id_client: id
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
    let session = await this.findByToken(token, userType)
    if(session){
        let isTokenExpired = (new Date(session.valid_until) - new Date()) <= 0
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




// Get session by token
exports.findByToken = async (token, userType) => {
    var condition = token ? { token: { [Op.eq]: token } } : null;
    var result = null;
    if (userType == "banque") {
        await SessionBanque.findOne({ where: condition })
        .then(data => {
            result = data
        })
        .catch(e => {
            console.log("Error", e)
        })
    } else if (userType == "admin") {
        await SessionAdmin.findOne({ where: condition })
        .then(data => {
            result = data
        })
        .catch(e => {
            console.log("Error", e)
        })
    }
    else{
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
    var condition = {where: {valid_until: {[Op.lte]: currentDate}}}
    await SessionClient.findAll(condition)
    .then(data => {
        console.log(data)
        for(var i=0; i<data.length; i++){
            SessionClient.destroy({where: {id_sessionclient: data[i].id_sessionclient}})
        }
    })
    await SessionBanque.findAll(condition)
    .then(data => {
        for(var i=0; i<data.length; i++){
            SessionBanque.destroy({where: {id_sessionbanque: data[i].id_sessionbanque}})
        }
    })
}

