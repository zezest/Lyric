const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user');

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use('login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true 
  },
  function (req, email, password, done) { 
    User.findOne({ email : email }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false, '등록되지 않은 이메일입니다.' );
      if (!user.chkPassword(password)) return done(null, false, { msg:'이메일 또는 비밀번호가 틀렸습니다.' } ); 

      return done(null, user);
    });
  }));
};