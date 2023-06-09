/* BEGIN db initialization */
const { Op } = require("sequelize");
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const Sequelize = require("../db.connection");
const Session = require("../models/session.model")(Sequelize.connection, Sequelize.library);

exports.createSession = async (id) => {

    let validity = moment().add(1, 'days').format()
    const obj = {
        token: uuidv4(),
        validUntil: validity,
        Id_Client: id
    };

    // Save new Session
    // Save in the database
    var result = {};
    await Session.create(obj)
        .then(data => {
            result = data
        })
        .catch(e => {
            console.log("error", e)
        });
    return result;
}

exports.deleteExpiredToken = async () => {
    var currentDate = moment().format();
    var condition = {where: {validUntil: {[Op.lte]: currentDate}}}
    await Session.findAll(condition)
    .then(data => {
        for(var i=0; i<data.length; i++){
            this.delete(data[i].id)
        }
    })
}

