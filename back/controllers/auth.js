const Sequelize = require("../db.connection");
var nodemailer = require('nodemailer');
const Crypto = require("crypto");

const Client = require("../models/client.model.js")(Sequelize.connection, Sequelize.library);
const Banque = require("../models/banque.model.js")(Sequelize.connection, Sequelize.library);

// TODO
exports.loginClient = async(req, res) => {
    // Check if user exists in database
    let client = await Client.findOne({where: {Email: req.body.Email}});

    if(client && client.Id_Client && 
        client.Password == Crypto.createHash('sha256').update(req.body.Password).digest('hex')){
        res.send(client);
    }
    else{
        res.status(401).send({message: "Wrong credentials"});
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
