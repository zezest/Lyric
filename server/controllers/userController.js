// const User = require('../models/user');
const config = require('../config');

exports.login = (req, res) => {
  const password = req.body.password;
  console.log(password);
  if (password == config.PASSWORD) {
    res.json({ msg: '로그인에 성공했습니다.', status: 200 });
  } else {
    res.status(400).send({ msg: '잘못된 비밀번호입니다.', status: 400 });
  }
}