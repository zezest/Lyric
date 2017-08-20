const fs = require('fs');
const config = require('../config');
const _ = require('lodash');
const nodemailer = require('nodemailer');
const moment = require('moment');
var JSZip = require('node-zip');

let smtpTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { 
    user: process.env.smtpUser || config.GMAIL.user,
    pass: process.env.smtpPass || config.GMAIL.pass
  }
});

exports.send = (lyrics, context) => {
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

  try{
    const zip = new JSZip();
    
    _.each(lyrics, lyric => {
      zip.file(lyric.name, lyric.context);
    });
    const data = zip.generate({base64:false,compression:'DEFLATE'});
    fs.writeFile(archive_name, data, 'binary', err => {
      if (err) throw err;
  
      smtpTransport.sendMail(mailOptions, (err, res) => {
        if (err) throw err;
        else {
          console.log('message sent success');

          fs.unlink(archive_name);
          _.each(lyrics, lyric => {
            fs.unlink(lyric.name);
          });
  
          smtpTransport.close();
        }
      });
    });
  } catch (exception) {
    fs.unlink(archive_name);
    _.each(lyrics, lyric => {
      fs.unlink(lyric.name);
    });
    throw exception;
  } 
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