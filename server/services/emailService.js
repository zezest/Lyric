const fs = require('fs');
const config = require('../config');
const nodemailer = require('nodemailer');

let smtpTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: config.GMAIL
});

exports.send = (context) => {
  const mailOptions = {
    from: config.GMAIL.user,
    to: 'eskim@station3.co.kr',
    subject: 'nodemailer test',
    text: context,
    attachments: [
      {
        fileName: 'lyrics.txt',
        path: 'text1.txt',
      }
    ]
  };


  fs.writeFile('text1.txt', context, 'utf8', function(err) {
    if (err) return '서버 파일 생성 에러';

    smtpTransport.sendMail(mailOptions, (err, res) => {
      if (err) console.log(err);
      else console.log('message sent success', res);
    });

    smtpTransport.close();
  });
}