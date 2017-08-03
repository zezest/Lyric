const Book = require('../models/book');

exports.getAllBooks = (req, res) => {
  Book.find((err, books) => {
    if (err) return res.status(500).send({error: 'database failure'});
    res.json(books);
  })
}

exports.getSingleBook = (req, res) => {
  Book.findOne({_id: req.params.book_id}, (err, book) => {
    if(err) return res.status(500).json({error: err});
    if(!book) return res.status(404).json({error: 'book not found'});
    res.json(book);
  })
}

exports.getBookByAuthor = (req, res) => {
  // 첫번째 인자에는 query 를, 두번째는 projection 을  // title 과 published_date 만 출력
  Book.find({author: req.params.author}, {_id: 0, title: 1, published_date: 1},  function(err, books){
    if(err) return res.status(500).json({error: err});
    if(books.length === 0) return res.status(404).json({error: 'book not found'});
    res.json(books);
  })
}

exports.postCreateBook = (req, res) => {
  const book = new Book();
  book.title = req.body.title;
  book.author = req.body.author;
  book.published_date = new Date(req.body.published_date);

  if (!req.body.title) return res.status(400).send({ error: 'database failure', msg: 'need title' });
  else if (!req.body.author) return res.status(400).send({ error: 'database failure', msg: 'need author.' });

  book.save(err => {
    if (err) {
      return res.status(400).send({ result: 0 });
    }

    res.json({result: 1});
  });
}

exports.putUpdateBook = (req, res) => {
  // Book.findById(req.params.book_id, (err, book) => {
  //   if (err) return res.status(500).json({ error: 'database failure' });
  //   if (!book) return res.status(404).json({ error: 'book not found' });

  //   if (req.body.title) book.title = req.body.title;
  //   if (req.body.author) book.author = req.body.author;
  //   if (req.body.published_date) book.published_date = req.body.published_date;

  //   book.save(err => {
  //     if (err) res.status(500).json({ error: 'failed to update' });
  //     res.json({ message: 'book updated' });
  //   });

  // });

  Book.update({ _id: req.params.book_id }, { $set: req.body }, (err, output) => {
    if(err) res.status(500).json({ error: 'database failure' });
    if(!output.n) return res.status(404).json({ error: 'book not found' });
    res.json( { message: 'book updated' } );
  })
}

exports.deleteBook = (req, res) => {
  Book.remove({ _id: req.params.book_id }, function(err, output){
    if(err) return res.status(500).json({ error: "database failure" });

    /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
    if(!output.result.n) return res.status(404).json({ error: "book not found" });
    res.json({ message: "book deleted" });
    */

    res.status(204).end();
  })
}