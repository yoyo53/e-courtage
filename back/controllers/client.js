/* BEGIN db initialization */
const { Op } = require("sequelize");
const Sequelize = require("../db.connection");
const Client = require("../models/client.model.js")(Sequelize.connection, Sequelize.library);

/* END db initialization */

