const Lyric = require('../models/lyric');
const _ = require('lodash');
const moment = require('moment');
const emailService = require('../services/emailService');

exports.getAllLyrics = (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 2

  Lyric.count((err, count) => {
    if (err) throw err;
    Lyric.find({}, { _id: 1, title: 1, lyrics: 1, patterns: 1, published_date: 1 }, (err, lyrics) => {
      if (err) return res.status(500).send({ error: 'database failure', status: 500 });

      const total_page = Math.ceil(count / limit);
      const data = {
        lists: lyrics,
        has_more: !(page === total_page),
        limit: limit,
        total: count,
        page: page,
        total_page: total_page,
      }

      res.json(data);
    }).sort({ "published_date": -1 }).skip((page - 1) * limit).limit(limit);
  })
}

exports.getSingleLyric = (req, res) => {
  Lyric.findOne({_id: req.params.lyric_id}, (err, lyric) => {
    if (err) return res.status(500).json({ error: err, status: 500 });
    if (!lyric) return res.status(404).json({ error: 'lyric not found', status: 404 });
    res.json(lyric);
  })
}

exports.getSearchLyrics = (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 2;

  Lyric.count((err, count) => {
    Lyric.find({title: {$regex: new RegExp(req.params.title), $options: 'i'}}, { _id: 1, title: 1, lyrics: 1, published_date: 1 }, (err, lyrics) => {
      if (err) return res.status(500).json({ error: err, status: 500 });

      const array = [];
      _.each(lyrics, lyric => {
        const setData = {
          _id: lyric._id,
          title: lyric.title,
          published_date: lyric.published_date,
          length: lyric.lyrics.length - 1 || '-'
        }
        array.push(setData);
      });

      const total_page = Math.ceil(count / limit);
      const data = {
        lyrics: array,
        has_more: !(page === total_page),
        limit: limit,
        page: page,
        total_page: total_page,
      }
      res.json(data);
    }).sort({"published_date": -1 }).skip((page - 1) * limit).limit(limit);
  });
}

exports.postCreateLyric = (req, res) => {
  const lyric = new Lyric();
  lyric.title = req.body.title;
  lyric.lyrics = req.body.lyrics;

  if (!req.body.title) return res.status(400).send({ msg: 'need title', status: 400 });
  else if (!req.body.lyrics) return res.status(400).send({ msg: 'need lyrics.', status: 400 });

  lyric.save(err => {
    if (err) return res.status(400).send({ result: 0, status: 400 });
    res.json({ result: 'OK' });
  });
}

exports.putUpdateLyric = (req, res) => {
  req.body.edit_date = moment();
  Lyric.update({ _id: req.params.lyric_id }, { $set: req.body }, (err, output) => {
    if (err) res.status(500).json({ error: 'database failure', status: 500 });
    if (!output.n) return res.status(404).json({ error: 'lyric not found', status: 404 });
    res.json( { message: 'lyric updated' } );
  });
}

exports.deleteLyric = (req, res) => {
  Lyric.remove({ _id: req.params.lyric_id }, (err, output) => {
    if (err) return res.status(500).json({ error: "database failure", status: 500 });
    res.status(204).end();
  });
}


exports.sendLyric = (req, res) => {
//   let ids = req.body.ids;
//   const sendFile = [];
// console.log('ids', ids)
//   _.forEach(ids, id => {
//     Lyric.findById({ _id: id }, { title: 1, patterns: 1, lyrics: 1 }, (err, lyric) => {
//       if (err) return res.status(500).json({ error: "database failure", status: 500 });
//       if(lyric.patterns.length === 0){ return false; }
      
//       const lyrics = lyric.lyrics;

//       const title = [];

//       _.each(lyric.patterns, pattern => {
//         const lyric = _.find(lyrics, lyric => {
//           return lyric._id == pattern;
//         });
//         title.push(lyric.type);
//       });
//       const titles = title.join('-') + '\n\n\n';

//       const text = [];

//       _.each(lyric.patterns, pattern => {
//         const lyric = _.find(lyrics, lyric => {
//           return lyric._id == pattern;
//         });
//         const array = [];
//         array.push(`<${lyric.type}>\n`);
//         array.push(`${lyric.text}\n`);
//         array.push('\n');
//         text.push(array.join(''));
//       });

//       console.log('titles', titles)
//       console.log('text', text)
//       const context = [];
//       context.push(titles);
//       context.push(text.join(''));


//       sendFile.push(context.join(''));
//       // return context.join('');
//     });
//   });

//   console.log(sendFile);


  return res.json( { message: 'ok'} );

  // let id = req.query.id;
  // const types = req.query.type;

  // Lyric.findById({ _id: id }, (err, lyric) => {
  //   const lyrics = lyric.lyrics;
  //   const context = [types];

  //   types.trim().split('-').forEach((type) => {
  //     _.each(lyrics, item => {
  //       if(item.type === type) {
  //         const array = [];
  //         array.push('<' + type + '>\n');
  //         array.push(item.text + '\n');
  //         type === 'intro' ? null : array.push('\n');

  //         context.push(array.join(''));
  //       }
  //     });
  //   });

  //   emailService.send(context.join(''));
  // });

  // res.json( { message: 'ok' } );
}