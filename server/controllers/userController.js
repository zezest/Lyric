const User = require('../models/user');
const config = require('../config');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcrypt-nodejs');

exports.login = (req, res) => {
  const password = req.body.password;
  console.log(password);
  if (password == config.PASSWORD) {
    res.json({ msg: '로그인에 성공했습니다.', status: 200 });
  } else {
    res.status(400).send({ msg: '잘못된 비밀번호입니다.', status: 400 });
  }
}

/**
 * 회원가입
 */
exports.signup = (req, res) => {
  const join_user = new User();
  signup_user.name = req.body.name;
  signup_user.email = req.body.email;
  signup_user.password = req.body.password;

  if (!req.body.name) return res.status(400).send({ msg: 'need name', status: 400 });
  else if (!req.body.email) return res.status(400).send({ msg: 'need email', status: 400 });
  else if (!req.body.password) return res.status(400).send({ msg: 'need password', status: 400 });

  User.find({ email: req.body.email }, { email: 1 }, ( err, user ) => {
    if (err) return res.status(500).send({ error: 'database failure', status: 500 });

    if(user.length > 0) {
      res.status(400).send({ msg: '이미 등록된 이메일입니다.', status: 400 });
    } else {
      signup_user.save( (err, data) => {
        if (err) return res.status(400).send({ result: 0, status: 400 });
        res.json({ result: 'OK' });
      });
    }
  });
}