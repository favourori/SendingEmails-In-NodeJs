/*
Sending emails with Node Js 
Using NodeMailer
*/

//const express = require("express");
//const app = express();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

sendEmail = async () => {
  const emailBody = `
    <h3>Hello, Favour</h3>
    <p>This is a sample email sent from Nodemailer</p>
    <p>So, it work 🥰</p>
    `;

  //Creating Transporter
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EmailId, // generated ethereal user
      pass: process.env.EmailPassword // generated ethereal password
    }
  });

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Favour ori 👻" <favour@learningnode.com>', // sender address
      to: "orifavour2000@gmail.com", // list of receivers
      subject: "Node Js Emailing", // Subject line
      text: "Hello man, this works wella 🥰", // plain text body
      html: emailBody
    });

    console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.log(err.message);
  }
};

sendEmail();
