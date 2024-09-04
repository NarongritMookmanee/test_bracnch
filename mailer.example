const nodemailer = require('nodemailer');

const my_email = 'narongrit.mn@hotmail.com'
const my_password = '114258NRT'
const to_email = 'znarongrit.m@pttdigital.com'

const transporter = nodemailer.createTransport({
  service:'hotmail',
  auth: {
    user: my_email,
    pass: my_password,
  },
});

const mailOptions = {
  from: my_email,
  to: to_email,
  subject: 'Hello from Nodemailer',
  text: 'Hello, world!',
  html: '<strong>Hello, world!</strong>',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});