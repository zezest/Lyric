const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const passport = require('passport');
const session = require('express-session');

const app = express();
const buildPath = path.join(__dirname, '..', 'build');
const DEFAULT_PORT = process.env.PORT || 3030;

app.use(logger(':method :url :status :res[content-length] - :response-time ms'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(buildPath));

// // CONNECT TO MONGODB SERVER
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
  // CONNECTED TO MONGODB SERVER
  console.log("Connected to mongod server");
});

require('./config/passport')(passport);

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

const DEFAULT_DBURL = process.env.MONGODB_URI || config.DBURL;
mongoose.connect(DEFAULT_DBURL, {
  useMongoClient: true,
});

const router = require('./routes')(app);

app.get('/', (req, res) => {
  res.sendFile(`${buildPath}/index.html`);
});

app.listen(DEFAULT_PORT, () => {
  // console.log(process.env.MONGODB_URI)
  console.log(`서버 실행중. 포트: ${DEFAULT_PORT}`);
});
