const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env["PORT"] || 3000;
const adminMail = 'tommy.vichidvongsa@gmail.com';
const password = 'jjsg vyll xrnt pbec';

app.use(bodyParser.json());
app.use(cors());

app.post('/email/send-mail', (req, res) => {
  const { from_email, subject, text_content } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: adminMail,
      pass: password
    }
  });

  const mailOptions = {
    to: adminMail,
    subject: from_email + ' : ' + subject,
    text: text_content
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent', info.response);
      res.status(200).send(JSON.stringify('Email sent successfully'));
    }
  });

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
