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
        error: '로그인을 해주세요.',
        status: 401,
      });
 }

  // GET ALL LYRIC
  app.get('/api/lyrics', lyricController.getAllLyrics);
  // GET SINGLE LYRIC
  app.get('/api/lyrics/:lyric_id', isAuthenticated, lyricController.getSingleLyric);
  // // FIND LYRICS BY TITLE
  // app.get('/api/lyrics/title/:title', lyricController.getSearchLyrics);
  // EMAIL SEND
  app.post('/api/lyrics/send', lyricController.sendLyric);
  // app.post('/api/lyrics/send', isAuthenticated, lyricController.sendLyric);
  // CREATE LYRIC
  app.post('/api/lyrics', isAuthenticated, lyricController.postCreateLyric);
  // UPDATE THE LYRIC
  app.put('/api/lyrics/:lyric_id', isAuthenticated, lyricController.putUpdateLyric);
  // DELETE LYRIC
  app.delete('/api/lyrics/:lyric_id', isAuthenticated, lyricController.deleteLyric);


  // LOGOUT
  app.get('/api/logout', isAuthenticated, userController.logout);
  // LOGIN
  app.post('/api/login', passport.authenticate('login'), ( req, res ) => {
    const userInfo = req.session.passport.user;
    const user = {
      email: userInfo.email,
      name: userInfo.name,
      id: userInfo.id
    }
    
    return res.json( user );
  });
  // JOIN
  app.post('/api/user/add', userController.signup);
  // GET ALL USERS
  app.get('/api/users', userController.getAllUsers);
}