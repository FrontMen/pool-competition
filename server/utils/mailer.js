'use strict';
const setup = require("../../credentials/mail.js");
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport(setup);


function verify(email, hash){
    let text = `Thanks for signing up! Start using Pool Competition by clicking this link: ${hash}`;

    transporter.sendMail({
        from: '"Justus" <justus@frontmen.nl>',
        to: email,
        subject: 'Verify your Pool Competition account', // Subject line
        text: text
    }, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}

module.exports = {
    verify: verify
};