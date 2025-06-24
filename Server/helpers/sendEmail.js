const nodemailer = require("nodemailer");

async function sendEmail(email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.auth_email,
      pass: process.env.auth_pass,
    },
  });
  const info = await transporter.sendMail({
    from: process.env.auth_email, // sender address
    to: email, // list of receivers
    subject: "Registration OTP", // Subject line
    html: `<div><img alt=""src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/495133594_1842607353262628_5102823849368249121_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG6lr8I9DMM33DCpPai_Pxw-D3NUb4wrw_4Pc1RvjCvDwnzYS68Zvhn1m2tCUv3gtI8Ghl8RLtdPAaqmzueyrIS&_nc_ohc=DakkWiScRmkQ7kNvwHGE1dG&_nc_oc=AdmXarNyF6BuNy73cI9fj9Gs4PXq2E_ulrvGxbWexksCSCHkfP11gdi-OsiNizhzy88&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AhEq30Ia6IFn5FTSQB4IvQ&oh=00_AfNJASJQN6nzO4FugC86b9LFs0xUBESGwrCefSlwKR7v-A&oe=6860B48A"><h3>Your One-time password otp</h3><p>The OTP is valid for 2 minutes after being issued. Please enter the above OTP on the career Sign-In screen to proceed.</p></div>`,
  });
}

module.exports = sendEmail;
