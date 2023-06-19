const Sequelize = require("../db.connection");
const Document = require("../models/document.model.js")(Sequelize.connection, Sequelize.library);
const Contient = require("../models/contient.model.js")(Sequelize.connection, Sequelize.library);
const Accepter = require("../models/accepter.model.js")(Sequelize.connection, Sequelize.library);
const sessions = require("./session.js");
const file = require("./file.js");

exports.addDocument = async (req, res) => {	
	try{
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

			// Create document
			const nameFile = req.file.originalname;
			const extension = nameFile.split('.').pop();

			
			let document = await Document.create({
				id_client: client.id_client,
				nom_document: req.body.nom_document + '.' + extension,
			});
			const newName = document.id_document + '.' + extension;
			
			// Upload file
			file.uploadFile(req, newName);
			res.status(200).send({id_document: document.id_document, message: `${newName} added successfully`});
		}	
	} catch(err){
		res.status(500).send({ message: "Error has occured" });
	}

}

exports.deleteDocument = async (req, res) => {
	try{
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
			let document = await Document.findOne({
				where: {
					id_document: req.params.id_document,
					id_client: client.id_client
				}
			});
			const extension = document.nom_document.split('.').pop();	
			const name_file = document.id_document + '.' + extension;

			// Delete contient
			await Contient.destroy({
				where: {
					id_document: req.params.id_document
				}
			});
			// Delete document
			await Document.destroy({
				where: {
					id_document: req.params.id_document,
					id_client: client.id_client
				}
			});

			// Delete file
			file.deleteFile(name_file);

			res.status(200).send({ message: "Document deleted successfully" });
		}
	} catch(err){
		res.status(500).send({ message: "Error has occured" });
	}

}

exports.getAllDocuments = async (req, res) => {
	try{	
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

			// Get all documents
			let documents = await Document.findAll({
				where: {
					id_client: client.id_client
				}
			});
			res.status(200).send(documents);
		}
	} catch(err){
		res.status(500).send({ message: "Error has occured" });
	}

}

exports.getSingleDocument = async (req, res) => {
	try{
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

			// Get document
			let document = await Document.findOne({
				where: {
					id_document: req.params.id_document,
					id_client: client.id_client
				}
			});
			res.status(200).send(document);
		}
	} catch(err){
		res.status(500).send({ message: "Error has occured" });
	}

}

exports.updateDocument = async (req, res) => {
	try{
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
			
			let document = await Document.findOne({
				where: {
					id_document: req.params.id_document,
					id_client: client.id_client
				}
			});

			// Previous file name
			const document_name = document.nom_document;
			const extension = document_name.split('.').pop();
			const name_file = document.id_document + '.' + extension;

			// New file name
			const nameFile = req.file.originalname;
			const extension_new = nameFile.split('.').pop();
			const newName = document.id_document + '.' + extension_new;

			// Update document
			await Document.update({
				nom_document: nameFile,
			}, {
				where: {
					id_document: req.params.id_document,
					id_client: client.id_client
				}
			});

			// Delete previous file
			file.deleteFile(name_file);
	
			// Upload file
			file.uploadFile(req, newName);
			res.status(200).send({ message: "Document updated successfully" });
		}
	} catch(err){
		res.status(500).send({ message: "Error has occured" });
	}
	
}

exports.deleteAllDocuments = async (req, res) => {
	try{
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
			let documents = await Document.findAll({
				where: {
					id_client: client.id_client
				}
			});
			for (document of documents) {
				const extension = document.nom_document.split('.').pop();
				const name_file = document.id_document + '.' + extension;
				// Delete file
				file.deleteFile(name_file);
			}

			// Delete all contient
			await Contient.destroy({
				where: {
					id_client: client.id_client
				}
			});

			// Delete all documents
			await Document.destroy({
				where: {
					id_client: client.id_client
				}
			});
			res.status(200).send({ message: "All documents deleted successfully" });
		}
	} catch (err) {
		res.status(500).send({ message: "Error has occured" });
	}
	
}

exports.downloadDocument = async (req, res) => {
	try{
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

			// Get document
			let document = await Document.findOne({
				where: {
					id_document: req.params.id_document,
					id_client: client.id_client
				}
			});
			const extension = document.nom_document.split('.').pop();
			const name_file = document.id_document + '.' + extension;
			// Download file
			file.getFile(name_file, res);
		}
	} catch (err) {
		res.status(500).send({ message: "Error has occured" });
	}
}

exports.downloadAllDocuments = async (req, res) => {
	try{
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
			let documents = await Document.findAll({
				where: {
					id_client: client.id_client
				}
			});
			name_files = [];
			for (document of documents) {
				const extension = document.nom_document.split('.').pop();
				const name_file = document.id_document + '.' + extension;
				name_files.push(name_file);
			}
			// Download file
			file.getFiles(name_files, res);

			res.status(200).send({ message: "All documents downloaded successfully" });
		}
	} catch (err) {
		res.status(500).send({ message: "Error has occured" });
	}
	
}

exports.downloadAllDocumentsBanque = async (req, res) => {
	try{
		// Get Client Id from token
		var token = req.get("Authorization");

		// Verify if user is logged in
		let session = await sessions.verifyToken(token, "banque");

		if (!session) {
			res.status(401).send({ message: "Unauthorized" });
			return;
		} else {
			// Get Banque Id
			let banque = await sessions.findByToken(token, "banque");
			let accepter = await Accepter.findOne({
				where: {
					id_banque: banque.id_banque,
					id_demande : req.params.id_demande
				}
			});
			let contients = await Contient.findAll({
				where: {
					id_demande: accepter.id_demande
				}
			});
			let documents = await Document.findAll({
				where: {
					id_document: contients.id_document
				}
			});

			let name_files = [];
			for (document of documents) {
				const extension = document.nom_document.split('.').pop();
				const name_file = document.id_document + '.' + extension;
				name_files.push(name_file);
			}
			// Download file
			file.getFiles(name_files, res);
			

			res.status(200).send({ message: "All documents downloaded successfully" });
		}
	} catch (err) {
		res.status(500).send({ message: "Error has occured" });
	}
	
}
	



