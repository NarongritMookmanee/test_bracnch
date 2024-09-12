const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer')
// const { ProjectConfigRepository } = require("../repository")
const auth_email = process.env.HANDING_ERR_EMAIL
const auth_password = process.env.HANDING_ERR_PASSWORD

async function sendEmail(project, errDescriptions, callback) {
  const rawMailOptions = {
    id: '238219fjdjf',
    project: 'IDP Demo',
    enable: true,
    mailOptions: {
      to: 'znarongrit.m@pttdigital.com',
      subject: 'IDP system - Error handler of Project: ${project}',
      text: 'Project: {project} was found error\ndescriptions: {errordescriptions}',
    }
  }
  // rawMailOptions = JSON.parse(rawMailOptions)
  const keys = Object.keys(rawMailOptions.mailOptions)
  keys.forEach(key => {
    if (key !== 'to') {
      rawMailOptions.mailOptions[key] = rawMailOptions.mailOptions[key].replaceAll('{project}', project)
      rawMailOptions.mailOptions[key] = rawMailOptions.mailOptions[key].replaceAll('{errordescriptions}', errDescriptions)
    }
  })
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: auth_email,
      pass: auth_password,
    },
  });

  const mailOptions = Object.assign({ from: auth_email }, rawMailOptions.mailOptions)
  console.log(mailOptions)

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      callback(error, info)
    }
    callback(null, info.response)
  });
}

sendEmail('IDP demo', 'Error Details...', (error, info) => {
  error ? console.error(error) : console.log(info)
})
module.exports = sendEmail