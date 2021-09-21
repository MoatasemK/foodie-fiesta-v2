const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transport.sendMail({
    from: "unnatibamania8@gmail.com",
    to: options.to,
    subject: options.subject,
    html: options.html,
  });
};

module.exports = sendEmail;
