const Lyric = require('../models/lyric');

exports.getAllLyrics = (req, res) => {
  Lyric.find((err, lyrics) => {
    if (err) return res.status(500).send({ error: 'database failure', status: 500 });
    res.json(lyrics);
  })
}

exports.getSingleLyric = (req, res) => {
  Lyric.findOne({_id: req.params.lyric_id}, (err, lyric) => {
    if (err) return res.status(500).json({ error: err, status: 500 });
    if (!lyric) return res.status(404).json({ error: 'lyric not found', status: 404 });
    res.json(lyric);
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