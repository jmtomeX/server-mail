"use strict";
const nodemailer = require('nodemailer');
const { USER_MAIL, PASSW_MAIL, HOST_MAIL } = require('./config')

module.exports = (formulario) => {
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: HOST_MAIL,
            port: 465,
            secure: true, // true for 465 --> Secure SSL/TLS, false for other ports  
            auth: {
                user: USER_MAIL,
                pass: PASSW_MAIL,
            },
            tls: {
                rejectUnauthorized: false
            },
            maxConnections: 5,
            maxMessages: 50
        });

        // enviar correo con objeto de transporte definido
        let info = await transporter.sendMail({
            from: `"${formulario.nombre} 👻" <${formulario.email}> Portafolio`,
            to: "iremti2@gmail.com",
            subject: 'Mensaje desde el portafolio',
            html: `
                    <strong>Nombre:</strong> ${formulario.nombre} <br/>
                    <strong>E-mail:</strong> ${formulario.email} <br/>
                    <strong>Mensaje:</strong> ${formulario.mensaje}
                `
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);
}





// const nodemailer = require('nodemailer');
// module.exports = (formulario) => {
//     var transporter = nodemailer.createTransport({
//         host: 'smtp.muchoruidoypocasluces.com ',
//         service: 'smtp',
//         pool: true,
//         secure: true, // use TLS
//         port: 465,
//         auth: {
//             user: 'portafolio@muchoruidoypocasluces.com',
//             pass: ',8]]0z6a[iAx'
//         },
//         tls: {
//             rejectUnauthorized: false
//         },
//         maxConnections: 5,
//         maxMessages: 50
//     });
//     console.log(formulario);


//     const mailOptions = {
//         from: `”${formulario.nombre} 👻” <${formulario.email}>`,
//         to: 'iremti2@gmail.com', //  destinatario
//         subject: 'Correo recibido desde el portafolio.',
//         html: `
//     <strong>Nombre:</strong> ${formulario.nombre} <br/>
//     <strong>E-mail:</strong> ${formulario.email} <br/>
//     <strong>Mensaje:</strong> ${formulario.mensaje}
//     `
//     };


//     transporter.sendMail(mailOptions, function(err, info) {

//         if (err) {
//             console.log(err);
//             console.log(info);
//             res.send(500, err.message);
//         } else {
//             console.log("Email sent");
//             res.status(200).jsonp(req.body);
//         }
//     });
// }