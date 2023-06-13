var nodemailer = require('nodemailer');

exports.sendConfirmationMail = sendConfirmationMail;

/* Send mail to email given */
function sendConfirmationMail(email, name){
    //Create reusable transporter 
    let transporter = nodemailer.createTransport({
        service: "gmail",
        secure:true,
        auth: {
            user: "eecourtage@gmail.com",
            pass: "eecourtage.2000"
        }
    });
    // Message object
    let message = {
    from: 'eecourtage@gmail.com',
    to: "angele.blais@efrei.net",
    subject: 'Confirmation of Account creation',
    text: 'Hi ' + req.body.Username +",",
    html:'Hi '+ req.body.Username + ',' + '<br><p>Thanks again for creating an account on ecourtage.</p> <p>Follow this link to begin your ecourtage adventure! :</p> <p>http://lefthanging-frontend.s3-website.us-east-2.amazonaws.com/</p>'
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