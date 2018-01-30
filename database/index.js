require('dotenv').config()
const mongoose = require('mongoose');

const mongoUri = `mongodb://${process.env.wcdpe}`;

mongoose.connect(mongoUri);

const db = mongoose.connection;

db.on('error', function(err) {
  console.log('mongoose connection error with ', err);
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

module.exports = db;
