const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const buildPath = path.join(__dirname, '..', 'build');
const DEFAULT_PORT = process.env.PORT || 3030;

app.use(logger(':method :url :status :res[content-length] - :response-time ms'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(buildPath));

const router = require('./routes')(app);

// // CONNECT TO MONGODB SERVER
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
  // CONNECTED TO MONGODB SERVER
  console.log("Connected to mongod server");
});

const DEFAULT_DBURL = process.env.MONGODB_URI || config.DBURL;
mongoose.connect(DEFAULT_DBURL, {
  useMongoClient: true,
});

app.get('/', (req, res) => {
  res.sendFile(`${buildPath}/index.html`);
});

app.listen(DEFAULT_PORT, () => {
  console.log(process.env.MONGODB_URI)
  console.log(`서버 실행중. 포트: ${DEFAULT_PORT}`);
});
