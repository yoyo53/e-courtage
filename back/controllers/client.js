/* BEGIN db initialization */
const { Op } = require("sequelize");
const Sequelize = require("../db.connection");
const Client = require("../models/client.model.js")(Sequelize.connection, Sequelize.library);
const sessions = require("./session.js");
const mail = require("./mail.js");
const Crypto = require("crypto");

exports.getClient = async (req, res) => {
	// Get Client Id from token
	var token = req.get("Authorization");

	// Verify if user is logged in
	let session = await sessions.verifyToken(token, "client");

	if (!session) {
		res.status(401).send({ message: "Unauthorized" });
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

exports.patchClient = async (req, res) => {
	// Get Client Id from token
	var token = req.get("Authorization");

	// Verify if user is logged in
	let session = await sessions.verifyToken(token, "client");

	if (!session) {
		res.status(401).send({ message: "Unauthorized" });
	} else {
		let client_session = await sessions.findByToken(token, "client");
		let client = await Client.findOne({ 
			where: { 
				id_client: client_session.id_client
			} });
        for(var key in req.body){
            client[key] = req.body[key];
        };
		
		// Save changes
		await client.save();

		res.status(200).send(client);
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

exports.sendRecuperationMail = async (req, res) => {
	let client = await Client.findOne({
		where: {
			email: req.body.email
		}
	});
	if(!client){
		res.status(404).send({message: "Client not found"});
	}
	else{
		if(client.account_status){
			let session = await sessions.createSession(client.id_client, "client");
			mail.sendRecuperationMail(client.email, client.nom, session.token);
			res.status(200).send({message: "Email sent"});
		}
		else{
			res.status(401).send({message: "Account not activated"});
		}
	}
}

exports.recuperationPassword = async (req, res) => {
	let session = await sessions.findByToken(req.body.token, "client");
	if(!session){
		res.send(401).send({message: "Unauthorized"});
	} else {
		let client = await Client.findOne({
			where: {
				id_client: session.id_client
			}
		});
		client.password = Crypto.createHash('sha256').update(req.body.password).digest('hex');
		await client.save();
		await session.destroy();
		res.status(200).send({message: "Password changed"});
	}
}
