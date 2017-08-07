const User = require('../models/user');
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

exports.join = (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;

  if (!req.body.name) return res.status(400).send({ msg: 'need name', status: 400 });
  else if (!req.body.email) return res.status(400).send({ msg: 'need email', status: 400 });
  else if (!req.body.password) return res.status(400).send({ msg: 'need password', status: 400 });

  user.save(err => {
    if (err) return res.status(400).send({ result: 0, status: 400 });
    res.json({ result: 'OK' });
  });
}