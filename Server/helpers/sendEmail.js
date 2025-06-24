const nodemailer = require("nodemailer");

async function sendEmail(email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.auth_email,
      pass: process.env.auth_pass,
    },
  });
}

module.exports = sendEmail;
