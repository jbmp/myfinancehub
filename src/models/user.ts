import mongoose, { Schema, Document } from 'mongoose';

export interface IUser {
  username: string;
  password: string;
  email: string;
  name: string;
  active: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

interface DUser extends IUser, Document {}

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  active: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  deleted_at: {
    type: Date,
    default: null,
  }
});

export default mongoose.model<DUser>('User', userSchema);