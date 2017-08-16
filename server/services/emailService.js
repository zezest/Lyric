const fs = require('fs');
const config = require('../config');
const nodemailer = require('nodemailer');
const moment = require('moment');

let smtpTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { 
    user: process.env.smtpUser || config.GMAIL.user,
    pass: process.env.smtpPass || config.GMAIL.pass
  }
});

exports.send = (context) => {
  const date = moment().format('YYMMDD');
  const file_name = 'lyrics_' + date +'.txt';
  const mailOptions = {
    from: config.GMAIL.user || 'Lyric',
    to: process.env.RECIEVER || config.RECIEVER,
    subject: 'Lyric 가사 전달',
    text: context,
    attachments: [
      {
        fileName: file_name,
        path: file_name,
      }
    ]
  };

  fs.writeFile(file_name, context, 'utf8', function(err) {
    if (err) throw err;

    smtpTransport.sendMail(mailOptions, (err, res) => {
      if (err) throw err;
      else {
        alert('메일 전송이 완료되었습니다.');
        console.log('message sent success');
      }
      fs.unlink(file_name);
    });

    smtpTransport.close();
  });
}