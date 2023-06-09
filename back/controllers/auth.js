const Sequelize = require("../db.connection");
var nodemailer = require('nodemailer');
const Crypto = require("crypto");

const sessions = require("../controllers/session.js");

const Client = require("../models/client.model.js")(Sequelize.connection, Sequelize.library);
const Banque = require("../models/banque.model.js")(Sequelize.connection, Sequelize.library);
const Session = require("../models/session.model.js")(Sequelize.connection, Sequelize.library);

// TODO
exports.loginClient = async(req, res) => {
    // Check if user exists in database
    let client = await Client.findOne({where: {Email: req.body.Email}});

    if(client && client.Id_Client && 
        client.Password == Crypto.createHash('sha256').update(req.body.Password).digest('hex')){
        
        // Find if user already has a session
        let session = await Session.findOne({where: {Id_Client: client.Id_Client}});

        // If user has a session, check if it is still valid
        let isTokenExpired = session ? (new Date(session.validUntil) - new Date() <= 0) : true;
        var token = "";
        if(session && !isTokenExpired){
            // If session is valid, return session
            token = session.token;
        } else {
            // If session is not valid, create a new one
            let newSession = await sessions.createSession(client.Id_Client);
            token = newSession.token;
        }
        res.status(200).send({token: token});
    }
    else{
        res.status(403).send({message: "Wrong credentials"});
    }
}

exports.registerClient = async(req, res) => {
    // Create new Client
    let client = {
        Nom: req.body.Nom,
        Prenom: req.body.Prenom,
        Email: req.body.Email,
        Password : Crypto.createHash('sha256').update(req.body.Password).digest('hex'),
        Tel: req.body.Tel,
        Emploi: req.body.Emploi,
        Revenue: req.body.Revenue
    }
    // Verify if user already exists
    let verifyClient = await Client.findOne({where: {Email: client.Email}});
    
    if(verifyClient != null){
        res.status(401).send({message: "Account already exists"});
        return;
    }
    // Save new Client
    Client.create(client)
        .then(data => {
            // Send a confirmation email to the user
            //sendConfirmationMail(req, res);
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({message: error.message || "Error while creating Client"});
        }
    );
}   

exports.loginBanque = async(req, res) => {
    console.log("Login Banque");
}



/* Send mail to email given */
function sendConfirmationMail(req, res){
    //Create reusable transporter 
    let transporter = nodemailer.createTransport({
        service: "gmail",
        secure:true,
        auth: {
            user: "",
            pass: ""
        }
    });
    // Message object
    let message = {
    from: 'wordpanic@gmail.com',
    to: req.body.Email,
    subject: 'Confirmation of Account creation',
    text: 'Hi ' + req.body.Username +",",
    html:'Hi '+ req.body.Username + ',' + '<br><p>Thanks again for creating an account on WordPanic.</p> <p>Follow this link to begin your WordPanic adventure! :</p> <p>http://lefthanging-frontend.s3-website.us-east-2.amazonaws.com/</p>'
    };

    // send mail with defined transport object
    transporter.sendMail(message, function(err, success){
    if(err){
        console.log(err);
    }
    else{
        console.log("Email Sent!")
    }
    })

}
