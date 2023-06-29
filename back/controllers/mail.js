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
    html:`
        <p>Hi ${name},</p>
        <p>
            Thanks again for creating an account on e-courtage. If you didn't create an account on 
            <a href="https://yoyo53.github.io/e-courtage">e-courtage</a>,
            you can safely delete this email.
        </p>
        <p>Tap the button below to confirm your email address:</p>
        <a href="https://e-courtage-back.fly.dev/auth/verifyClient/${token}" target="_blank"
           style="display: block; width: fit-content; margin: auto; padding: 16px 36px; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px; background-color: #1a82e2;">
            Verify your account
        </a>
        <p>If that doesn't work, copy and paste the following link in your browser:
            <br>
            <a href="https://e-courtage-back.fly.dev/auth/verifyClient/${token}" target="_blank">
                https://e-courtage-back.fly.dev/auth/verifyClient/${token}
            </a>
        </p>
        <br>
        <p>
            Cheers,
            <br>
            The e-courtage team
        </p>
    `
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