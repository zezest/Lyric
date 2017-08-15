const User = require('../models/user');
const config = require('../config');

/**
 * 회원가입
 */
exports.signup = (req, res) => {
  const newUser = new User();
  newUser.name = req.query.name;
  newUser.email = req.query.email;
  newUser.password = req.query.password;

  if (!req.query.name) return res.status(400).send({ msg: 'need name', status: 400 });
  else if (!req.query.email) return res.status(400).send({ msg: 'need email', status: 400 });
  else if (!req.query.password) return res.status(400).send({ msg: 'need password', status: 400 });

  User.findOne({ email: req.query.email }, ( err, user ) => {
    if (err) return res.status(500).send({ error: 'database failure', status: 500 });
    if (user) return res.status(400).send({ msg: '이미 등록된 이메일입니다.', status: 400 });
    
    newUser.save( (err, data) => {
      if (err) return res.status(400).send({ result: 0, status: 400 });
      res.json({ result: 'OK' });
    });
  });
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