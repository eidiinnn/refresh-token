import * as mongoose from 'mongoose';

export const TokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  refreshToken: { type: String, required: true },
  date: { type: String, required: true },
});

export interface Token {
  id: string;
  token: string;
  refreshToken: string;
  date: string;
}
