var nodemailer = require('nodemailer');

exports.sendConfirmationMail = sendConfirmationMail;

/* Send mail to email given */
function sendConfirmationMail(email, name){
    //Create reusable transporter 
    let transporter = nodemailer.createTransport({
        service: "gmail",
        secure:true,
        auth: {
            user: "wordpanic@gmail.com",
            pass: "diykfziehqyeibio"
        }
    });
    // Message object
    let message = {
    from: 'wordpanic@gmail.com',
    to: "thomas.song@efrei.net",
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