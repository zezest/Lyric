const Lyric = require('../models/lyric');

exports.getAllLyrics = (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 2

  Lyric.count((err, count) => {
    if (err) throw err;
    Lyric.find({}, { _id: 1, title: 1, published_date: 1 }, (err, lyrics) => {
      if (err) return res.status(500).send({ error: 'database failure', status: 500 });

      const total_page = Math.ceil(count / limit);
      const data = {
        lyrics: lyrics,
        has_more: !(page === total_page),
        limit: limit,
        total: count,
        page: page,
        total_page: total_page,
      }

      res.json(data);
    }).sort( { "published_date": 1 } ).skip((page - 1) * limit).limit(limit);
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
  Lyric.find({}, { _id: 1, title: 1, published_date: 1 }, (err, lyrics) => {

  })
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
  Lyric.update({ _id: req.params.lyric_id }, { $set: req.body }, (err, output) => {
    if (err) res.status(500).json({ error: 'database failure', status: 500 });
    if (!output.n) return res.status(404).json({ error: 'lyric not found', status: 404 });
    res.json( { message: 'lyric updated' } );
  })
}

exports.deleteLyric = (req, res) => {
  Lyric.remove({ _id: req.params.lyric_id }, (err, output) => {
    if (err) return res.status(500).json({ error: "database failure", status: 500 });
    res.status(204).end();
  })
}