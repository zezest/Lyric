const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

mongoose.connect('mongodb://localhost/mongodb_tutorial', {
  useMongoClient: true,
  /* other options */
});
// mongoose.connect('mongodb://username:password@host:port/database?options...');

// app.get('/', (req, res) => {
//   res.sendFile(`${buildPath}/index.html`);
// });

app.listen(DEFAULT_PORT, () => {
  console.log(`서버 실행중. 포트: ${DEFAULT_PORT}`);
});
