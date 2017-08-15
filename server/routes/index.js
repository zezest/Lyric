// Controllers
const lyricController = require('../controllers/lyricController');
const userController = require('../controllers/userController');
const passport = require('passport');

module.exports = app => {
  const isAuthenticated = ( req, res, next ) => {
    if(req.user)
       return next();
    else
       return res.status(401).json({
         error: 'User not authenticated'
       });
 }



  // GET ALL LYRIC
  app.get('/api/lyrics', lyricController.getAllLyrics);

  // GET SINGLE LYRIC
  app.get('/api/lyrics/:lyric_id', isAuthenticated, lyricController.getSingleLyric);

  // CREATE LYRIC
  app.post('/api/lyrics', isAuthenticated, lyricController.postCreateLyric);

  // UPDATE THE LYRIC
  app.put('/api/lyrics/:lyric_id', isAuthenticated, lyricController.putUpdateLyric);

  // DELETE LYRIC
  app.delete('/api/lyrics/:lyric_id', isAuthenticated, lyricController.deleteLyric);

  // FIND LYRICS BY TITLE
  app.get('/api/lyrics/title/:title', lyricController.getSearchLyrics);

  // EMAIL SEND
  app.post('/api/lyrics/send', isAuthenticated, lyricController.sendLyric);

  // JOIN
  app.get('/api/user/add', userController.signup);

  app.get('/api/login', passport.authenticate('login'), ( req, res ) => {
    return res.json( { msg: 'success' } );
  });

  // LOGOUT
  app.get('/api/logout', isAuthenticated, userController.logout);
}