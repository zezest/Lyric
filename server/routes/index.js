// Controllers
const bookController = require('../controllers/bookController');
const lyricController = require('../controllers/lyricController');

module.exports = app => {
  // GET ALL BOOKS
  app.get('/api/books', bookController.getAllBooks);

  // GET SINGLE BOOK
  app.get('/api/books/:book_id', bookController.getSingleBook);

  // GET BOOK BY AUTHOR
  app.get('/api/books/author/:author', bookController.getBookByAuthor);

  // CREATE BOOK
  app.post('/api/books', bookController.postCreateBook);

  // UPDATE THE BOOK
  app.put('/api/books/:book_id', bookController.putUpdateBook);

  // DELETE BOOK
  app.delete('/api/books/:book_id', bookController.deleteBook);

  // GET ALL LYRIC
  app.get('/api/lyrics', lyricController.getAllLyrics);

  // GET SINGLE LYRIC
  app.get('/api/lyrics/:lyric_id', lyricController.getSingleLyric);

  // CREATE LYRIC
  app.post('/api/lyrics', lyricController.postCreateLyric);

  // UPDATE THE LYRIC
  app.put('/api/lyrics/:lyric_id', lyricController.putUpdateLyric);

  // DELETE LYRIC
  app.delete('/api/lyrics/:lyric_id', lyricController.deleteLyric);
}