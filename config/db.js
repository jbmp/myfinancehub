const mongoose = require('mongoose');
require('dotenv').config();

const {
  MONGO_USERNAME = 'dev_user',
  MONGO_PASSWORD = 'dev_password',
  MONGO_HOSTNAME = 'mongodb-auth',
  MONGO_PORT = '27017',
  MONGO_DB = 'auth_db'
} = process.env;

const options = {
  retryWrites: true, // specfies whether the driver should retry write operations that fail due to a network errors
  retryReads: true,  // specfies whether the driver should retry read operations that fail due to network errors
  connectTimeoutMS: 10000, // give up initial connection after 10 seconds
}

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

const connectDB = () => {
  mongoose.connect(url, options)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
};

module.exports = connectDB;