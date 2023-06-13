const Sequelize = require("../db.connection");
const Demande = require("../models/Demande.model.js")(Sequelize.connection, Sequelize.library);
const sessions = require("./session.js");

//TODO