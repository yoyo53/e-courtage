/* BEGIN db initialization */
const { Op } = require("sequelize");
const Sequelize = require("../db.connection");
const Client = require("../models/client.model.js")(Sequelize.connection, Sequelize.library);
const sessions = require("./session.js");

exports.getClient = async (req, res) => {
	// Get Client Id from token
	var token = req.get("Authorization");

	// Verify if user is logged in
	let session = await sessions.verifyToken(token, "client");

	if (!session) {
		res.status(401).send({ message: "Unauthorized" });
		return;
	} else {
		// Get Client Id
		
		let client_session = await sessions.findByToken(token, "client");
		let client = await Client.findOne({
			where: {
				id_client: client_session.id_client
			}
		});
		res.status(200).send(client);
	}
}

exports.patch = async (req, res) => {
	// Get Client Id from token
	var token = req.get("Authorization");
	const sessions = require("./session.js");

	// Verify if user is logged in
	let session = await sessions.verifyToken(token, "client");

	if (!session) {
		res.status(401).send({ message: "Unauthorized" });
		return;
	} else {
        status_immo:{
			let client = await Client.findOne({ where: { id_client: client.id_client, nom: client.nom, prenom: client.prenom, email: client.email, password: client.password,  genre: client. genre, date_birth: client.date_birth, tel: client. tel, pays: client.pays, ville: client.ville,  adresse: client.adresse, status_immo: client.status_immo} });
		// let client = await Client.find((client) => client.id === session.clientId);
        for(var key in req.body){
            client[key] = req.body[key];
        };
		res.status(200).send(client);
	}
	}
}

exports.deleteClients = async (req, res) => {
	var token = req.get("Authorization");
	const sessions = require("./session.js");

	// Verify if user is logged in
	let session = await sessions.verifyToken(token, "client");
	let client = await sessions.findByToken(token, "client");

	if (!session) {
		res.status(401).send({ message: "Unauthorized" });
		return;
	} else {
		// Delete all clients
		await Client.destroy({
			where: {
				id_client: client.id_client
			}
		});
		res.status(200).send({ message: "All clients are deleted" });
	}
}
