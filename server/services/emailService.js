const fs = require('fs');
const config = require('../config');
const _ = require('lodash');
const nodemailer = require('nodemailer');
const moment = require('moment');
const zip = require("node-native-zip");

let smtpTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { 
    user: process.env.smtpUser || config.GMAIL.user,
    pass: process.env.smtpPass || config.GMAIL.pass
  }
});

exports.send = (titles, context) => {
  const date = moment().format('YYMMDD');
  const archive_name = 'lyrics_' + date +'.zip';
  const mailOptions = {
    from: config.GMAIL.user || 'Lyric',
    to: process.env.RECIEVER || config.RECIEVER,
    subject: 'Lyric 가사 전달',
    text: context,
    attachments: [
      {
        fileName: archive_name,
        path: archive_name,
      }
    ]
  };

  const archive = new zip();
  archive.addFiles(titles, err => {
    if (err) return console.log('file archiving error ', err);
    const buff = archive.toBuffer();

    fs.writeFile(archive_name, buff, () => {

      try {
        smtpTransport.sendMail(mailOptions, (err, res) => {
          if (err) throw err;
          else {
            console.log('message sent success');

            fs.unlink(archive_name);
            _.each(titles, title => {
              fs.unlink(title.name);
            });

            smtpTransport.close();
          }
        });
        
      } catch (exception) {
        if(fs.existsSync(archive_name)){
          fs.unlink(archive_name);
        }
        _.each(titles, title => {
          fs.unlink(title.name);
        });
        throw exception;
      }
    })
  });
}

exports.makeFile = ( title, context ) => {
  let fileName = title;
  while(true) {
    if(fs.existsSync(fileName+'.txt'))
      fileName = fileName+'_dupl';
    else break;
  }

  fs.writeFileSync(fileName+'.txt', context, 'utf8');
  
  return fileName;
}