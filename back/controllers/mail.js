var nodemailer = require('nodemailer');

exports.sendConfirmationMail = sendConfirmationMail;
exports.sendAgreementMail= sendAgreementMail;

/* Send mail to email given */
function sendConfirmationMail(email, name, token){
    //Create reusable transporter 
    let transporter = nodemailer.createTransport({
        service: "gmail",
        secure:true,
        auth: {
            user: process.env.ECOURTAGE_EMAIL,
            pass: process.env.ECOURTAGE_PASSWORD
        }
    });
    // Message object
    let message = {
    from: process.env.ECOURTAGE_EMAIL,
    to: email,
    subject: 'Confirmation of Account creation',
    text: 'Hi ' + name +",",
    html:'Hi '+ name + ',' + '<br><p>Thanks again for creating an account on ecourtage.</p> <p>Follow this link to activate your account! :</a href="https://e-courtage-back.fly.dev/auth/verifyClient/' + token + '">https://e-courtage-back.fly.dev/auth/verifyClient/' + token + '</a>'
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
/* Send agreement mail */
function sendAgreementMail(email, name, titre){
    //Create reusable transporter 
    let transporter = nodemailer.createTransport({
        service: "gmail",
        secure:true,
        auth: {
            user: process.env.ECOURTAGE_EMAIL,
            pass: process.env.ECOURTAGE_PASSWORD
        }
    });
    // Message object
    let message = {
    from: process.env.ECOURTAGE_EMAIL,
    to: email,
    subject: 'Banque subvention aproval',
    text: 'Bonjour ' + name + ",",
    html:'Bonjour '+ name + ',' + '<p>Votre demande</p>' + titre + '<p>a été acceptée</p>'
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