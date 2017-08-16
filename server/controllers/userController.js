const User = require('../models/user');
const config = require('../config');
const passport = require('passport');

/**
 * 회원가입
 */
exports.signup = (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;

  if (!req.body.name) return res.status(400).send({ msg: 'need name', status: 400 });
  else if (!req.body.email) return res.status(400).send({ msg: 'need email', status: 400 });
  else if (!req.body.password) return res.status(400).send({ msg: 'need password', status: 400 });

  User.findOne({ email: req.body.email }, ( err, email ) => {
    if (err) return res.status(500).send({ error: 'database failure', status: 500 });
    if (email) return res.status(400).send({ msg: '이미 등록된 이메일입니다.', status: 400 });
    
    user.save(err => {
      if (err) return res.status(400).send({ result: 0, status: 400 });
      res.json({ result: 'OK' });
    });
  });
}

exports.login = (req, res) => {
  passport.authenticate('login'), ( req, res ) => {
    return res.json({ msg: 'success' });
  }
}

/**
 * 로그아웃
 */
exports.logout = (req, res) => {
  req.logout();
  req.session.save(() => {
    return res.json({msg:'success logout'});
  });
}


exports.getAllUsers = (req, res) => {
  User.count((err, count) => {
    if (err) throw err;
    User.find({}, (err, user) => {
      if (err) return res.status(500).send({ error: 'database failure', status: 500 });

      const data = {
        lists: user,
        total: count,
      }

      res.json(data);
    }).sort({ "published_date": -1 });
  })
}
