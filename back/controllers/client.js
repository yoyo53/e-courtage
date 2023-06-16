/* BEGIN db initialization */
const { Op } = require("sequelize");
const Sequelize = require("../db.connection");
const Client = require("../models/client.model.js")(Sequelize.connection, Sequelize.library);

exports.getAllClients = async (req, res) => {
	// Get Client Id from token
	var token = req.get("Authorization");

	// Verify if user is logged in
	let session = await sessions.verifyToken(token, "client");

	if (!session) {
		res.status(401).send({ message: "Unauthorized" });
		return;
	} else {
		// Get Client Id
		let client = await sessions.findByToken(token, "client");
		let clients = await Clients.findAll({
			where: {
				id_client: client.id_client
			}
		});
		res.status(200).send(clients);
	}
}

exports.patch = async (req, res) => {
	// Get Client Id from token
	var token = req.get("Authorization");

	// Verify if user is logged in
	let session = await sessions.verifyToken(token, "client");

	if (!session) {
		res.status(401).send({ message: "Unauthorized" });
		return;
	} else {
		let client = await Clients.find((client) => client.id === session.clientId);
        for(var key in req.body){
            client[key] = req.body[key];
        };
		res.status(200).send(clients);
	}
}

