const Sequelize = require("../db.connection");
const Crypto = require("crypto");

const sessions = require("../controllers/session.js");

const Client = require("../models/client.model.js")(Sequelize.connection, Sequelize.library);
const Banque = require("../models/banque.model.js")(Sequelize.connection, Sequelize.library);
const Admin = require("../models/admin.model.js")(Sequelize.connection, Sequelize.library);
const Session = require("../models/sessionClient.model.js")(Sequelize.connection, Sequelize.library);
const SessionBanque = require("../models/sessionBanque.model.js")(Sequelize.connection, Sequelize.library);
const SessionAdmin = require("../models/sessionAdmin.model.js")(Sequelize.connection, Sequelize.library);
const mail = require("../controllers/mail.js");
const demande_banque = require("../controllers/demande_banque.js");

exports.loginClient = async(req, res) => {
    // Check if user exists in database
    let client = await Client.findOne({where: {email: req.body.email}});

    if(client && client.id_client && 
        client.password == Crypto.createHash('sha256').update(req.body.password).digest('hex') && client.account_status){
        
        // Find if user already has a session
        let session = await Session.findOne({where: {id_client: client.id_client}});

        // If user has a session, check if it is still valid
        let isTokenExpired = session ? (new Date(session.valid_until) - new Date() <= 0) : true;
        var token = "";

        // If user has a session and it is still valid
        if(session && !isTokenExpired){
            // If session is valid, token is the same
            token = session.token;
        } else {
            // If session is not valid, delete it and create a new one
            sessions.deleteExpiredToken();
            let newSession = await sessions.createSession(client.id_client, "client");
            token = newSession.token;
        }
        res.status(200).send({token: token});
    }
    else{
        res.status(403).send({message: "Wrong credentials"});
    }
}

exports.registerClient = async(req, res) => {
    //sendConfirmationMail(req, res);
    // Create new Client
    let client = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password : Crypto.createHash('sha256').update(req.body.password).digest('hex'),
        tel: req.body.tel,
        genre : req.body.genre,
        date_birth: req.body.date_birth,
        pays: req.body.pays,
        ville: req.body.ville,
        adresse : req.body.adresse
    }
    // Verify if user already exists
    let verifyClient = await Client.findOne({where: {email: client.email}});
    
    if(verifyClient != null){
        res.status(401).send({message: "Account already exists"});
        return;
    }
    let newClient = await Client.create(client);

    // Create new session
    let session = await sessions.createSession(newClient.id_client, "client");

    // Send confirmation mail
    mail.sendConfirmationMail(newClient.email, newClient.nom, session.token);

    res.status(200).send({id_client: newClient.id_client});
}   

exports.loginBanque = async(req, res) => {
    let banque = await Banque.findOne({where: {email: req.body.email}});

    if(banque && banque.id_banque && 
        banque.password == Crypto.createHash('sha256').update(req.body.password).digest('hex') && banque.account_status){
        
        // Find if banque already has a session
        let session = await SessionBanque.findOne({where: {id_banque: banque.id_banque}});

        // If banque has a session, check if it is still valid
        let isTokenExpired = session ? (new Date(session.valid_until) - new Date() <= 0) : true;
        var token = "";

        // If banque has a session and it is still valid
        if(session && !isTokenExpired){
            // If session is valid, token is the same
            token = session.token;
        } else {
            // If session is not valid, delete it and create a new one
            sessions.deleteExpiredToken();
            let newSession = await sessions.createSession(banque.id_banque, "banque");
            token = newSession.token;
        }
        res.status(200).send({token: token});
    }
    else{
        res.status(403).send({message: "Wrong credentials"});
    }
}


exports.registerBanque = async(req, res) => {
    //sendConfirmationMail(req, res);
    // Create new Banque
    let banque = {
        email: req.body.email,
        password: Crypto.createHash('sha256').update(req.body.password).digest('hex'),
        nom_banque: req.body.nom_banque,
        siret: req.body.siret,
        adresse: req.body.adresse,
        ville: req.body.ville,
        pays: req.body.pays,
        tel : req.body.tel,
        account_status: false,
    }
    // Verify if banque account already exists
    let verifyBanque = await Banque.findOne({where: {email: req.body.email}});
    
    if(verifyBanque != null){
        res.status(401).send({message: "Account banque already exists"});
        return;
    }
    // Save new Banque
    const createdBanque = await Banque.create(banque)
    demande_banque.getDemandesNewAccount(createdBanque.id_banque);
    res.send(createdBanque);
    
}


exports.loginAdmin = async(req, res) => {
    try{
        // Check if user exists in database
        let admin = await Admin.findOne({where: {identifiant: req.body.identifiant}});
        if(admin && admin.id_admin && 
            admin.password == Crypto.createHash('sha256').update(req.body.password).digest('hex')){
            
            // Find if user already has a session
            let session = await SessionAdmin.findOne({where: {id_admin: admin.id_admin}});
            // If user has a session, check if it is still valid
            let isTokenExpired = session ? (new Date(session.valid_until) - new Date() <= 0) : true;
            var token = "";

            // If user has a session and it is still valid
            if(session && !isTokenExpired){
                // If session is valid, token is the same
                token = session.token;
            }
            else {
                // If session is not valid, delete it and create a new one
                sessions.deleteExpiredToken();
                let newSession = await sessions.createSession(admin.id_admin, "admin");
                token = newSession.token;
            }
            res.status(200).send({token: token});
        }else{
            res.status(403).send({message: "Wrong credentials"});
        }
    } catch(err){
        res.status(500).send({message: "Error has occured"});
    }
}


exports.verifyClient = async(req, res) => {
    try{
        // Verify token
        let tokenClient = req.params.token;
        console.log(tokenClient);

        if(!tokenClient){
            res.status(401).send({message: "No token provided"});
            return;
        }
        // Find if token exists in database
        let session = await Session.findOne({where: {token: tokenClient}});
        if(!session){
            res.status(401).send(`<html>
                                    <body>
                                        <h1>Account verified</h1>
                                    </body>
                                </html>`);
            return;
        }
        // If token exists, check if it is still valid
        let isTokenExpired = session ? (new Date(session.valid_until) - new Date() <= 0) : true;

        // If token is valid, verify client account
        if(session && !isTokenExpired){
            await Client.update({account_status: true}, {where: {id_client: session.id_client}});
            // Delete token
            await Session.destroy({where: {token: tokenClient}});
            res.status(200).send(`<html>
                                    <body>
                                        <h1>Account verified</h1>
                                    </body>
                                </html>`);
        }
    }catch(err){
        console.log(err);
        res.status(500).send(`<html>
                                <body>
                                    <h1>Account already verified</h1>
                                </body>
                            </html>`);
    }
}