// Controllers
const lyricController = require('../controllers/lyricController');
const userController = require('../controllers/userController');
const passport = require('passport');

module.exports = app => {
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

  // FIND LYRICS BY TITLE
  app.get('/api/lyrics/title/:title', lyricController.getSearchLyrics);

  app.post('/api/lyrics/send', lyricController.sendLyric);
  

  // JOIN
  app.get('/api/user/add', userController.signup);
  
  // LOGIN
  app.get('/api/user/login', passport.authenticate('login', {
    successRedirect : '/list', 
    failureRedirect : '/login', //로그인 실패시 redirect할 url주소
  }))

  // LOGOUT
  app.get('/api/user/logout', userController.logout);
}