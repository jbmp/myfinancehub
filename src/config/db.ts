import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const {
  MONGO_USERNAME = 'dev_user',
  MONGO_PASSWORD = 'dev_password',
  MONGO_HOSTNAME = 'auth-api-db',
  MONGO_PORT = '27017',
  MONGO_DB = 'authApiDb'
} = process.env;

const options: mongoose.ConnectOptions = {
  retryWrites: true,
  retryReads: true,
  connectTimeoutMS: 10000,
};

const url: string = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

const connectDB = () => {
  mongoose.connect(url, options)
    .then(() => console.log('MongoDB connected...'))
    .catch((err: Error) => console.log(err));
};

export default connectDB;