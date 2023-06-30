var nodemailer = require('nodemailer');

exports.sendConfirmationMail = sendConfirmationMail;
exports.sendRecuperationMail = sendRecuperationMail;
exports.sendAgreementMail= sendAgreementMail;
exports.sendAdminDeletedDemandeMail = sendAdminDeletedDemandeMail;
exports.sendAdminBannedAccountMail = sendAdminBannedAccountMail;



/* Send mail to email given */
function sendConfirmationMail(email, name, token){
    let html = `
        <p>Bonjour ${name},</p>
        <p>
        Merci encore d'avoir créé un compte sur e-courtage. Si vous n'avez pas créé de compte sur 
        <a href="https://yoyo53.github.io/e-courtage">e-courtage</a>,
        vous pouvez supprimer cet e-mail en toute sécurité.
        </p>
        <p>Cliquez sur le bouton ci-dessous pour confirmer votre adresse e-mail :</p>
        <a href="https://yoyo53.github.io/e-courtage/#/client/verification/${token}" target="_blank"
        style="display: block; width: fit-content; margin: auto; padding: 16px 36px; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px; background-color: #1a82e2;">
        Vérifier votre compte
        </a>
        <p>Si cela ne fonctionne pas, copiez et collez le lien suivant dans votre navigateur :</p>
        <p>
        <a href="https://yoyo53.github.io/e-courtage/#/client/verification/${token}" target="_blank">
            https://yoyo53.github.io/e-courtage/#/client/verification/${token}
        </a>
        </p>
        <br>
        <p>
        Cordialement,
        <br>
        L'équipe e-courtage
        </p>
    `;
    let subject = "Confirmation of Account creation";
    transportMail(email, subject, html);
}

/* Send recover password mail */
function sendRecuperationMail(email, name, token){
    let html = `
        <p>Bonjour ${name},</p>
        <p>
            Vous avez demandé à récupérer votre mot de passe. Si vous n'avez pas demandé à récupérer votre mot de passe sur 
            <a href="https://yoyo53.github.io/e-courtage">e-courtage</a>,
            vous pouvez supprimer cet e-mail en toute sécurité.
        </p>
        <p>Cliquez sur le bouton ci-dessous pour récupérer votre mot de passe :</p>
        <a href="https://yoyo53.github.io/e-courtage/#/client/recover/${token}" target="_blank"
            style="display: block; width: fit-content; margin: auto; padding: 16px 36px; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px; background-color: #1a82e2;"> 
            Récupérer votre mot de passe
        </a>
        <p>Si cela ne fonctionne pas, copiez et collez le lien suivant dans votre navigateur :</p>
        <p>
            <a href="https://yoyo53.github.io/e-courtage/#/client/recover/${token}" target="_blank">
                https://yoyo53.github.io/e-courtage/#/client/recover/${token}
            </a>
        </p>
        <br>
        <p>
            Cordialement,
            <br>
            L'équipe e-courtage
        </p> 
    `;
    let subject = "Recover password";
    transportMail(email, subject, html);
}

/* Send Demande Deleted by Admin mail */
function sendAdminDeletedDemandeMail(email, name, titre){
    let html = `
        <p>Bonjour ${name},</p>
        <p>
            Votre demande ${titre} a été supprimée par l'administrateur. <br>
            La raison est : Non-respect des conditions d'utilisation.
        </p>
        <p>Si vous avez des questions, veuillez nous contacter à l'adresse <a href="mailto:${process.env.ECOURTAGE_EMAIL}">${process.env.ECOURTAGE_EMAIL}</a></p>
        <p>Vous pouvez créer une nouvelle demande en vous rendant sur notre site web :</p>
        <a href="https://yoyo53.github.io/e-courtage" target="_blank"<p>https://yoyo53.github.io/e-courtage</p></a>
        <p>
            Cordialement,
            <br>
            L'équipe e-courtage
        </p>
    `;
    let subject = 'Banque subvention deleted by admin';
    transportMail(email, subject, html);
}

/* Send Account Banned by Admin mail */
function sendAdminBannedAccountMail(email, name){
    let html = `
        <p>Bonjour ${name},</p>
        <p>
            Votre compte a été bannie par l'administrateur. <br>
            La raison est : Non-respect des conditions d'utilisation.
        </p>
        <p>Si vous avez des questions, veuillez nous contacter à l'adresse <a href="mailto:${process.env.ECOURTAGE_EMAIL}">${process.env.ECOURTAGE_EMAIL}</a></p>
        <p>
            Cordialement,
            <br>
            L'équipe e-courtage
        </p>
    `;
    let subject = 'Account banned by admin';
    transportMail(email, subject, html);
}


/* Send agreement mail */
function sendAgreementMail(email, name, titre){
    let html = 'Bonjour '+ name + ',' + '<p>Votre demande</p>' + titre + '<p>a été acceptée</p>'
    let subject = 'Banque subvention aproval';
    transportMail(email, subject, html);
}

function transportMail(email, subject, html){
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
        subject: subject,
        html: html
        };

    // send mail with defined transport object
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

