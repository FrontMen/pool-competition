'use strict';
import setup from "../../credentials/mail.js";
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport(setup);

function verify(hash, email){
    transporter.sendMail({
        from: '"Justus" <justus@frontmen.nl>',
        to: email,
        subject: 'Verify your Pool Competition account', // Subject line
        text: 'Hello world ?', // plain text body
        html: `<b>Hello world ?</b>`

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