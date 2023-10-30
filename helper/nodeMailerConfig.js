import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    // service: "gmail",
    // auth: {
    //   user: email,
    //   pass,
    // },
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: "jccvictoria2023@gmail.com",
      pass: "DZx54rB98MyR2vdb"
    }
});

