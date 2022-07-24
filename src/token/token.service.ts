import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Token } from './token.model';
import { Model } from 'mongoose';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel('Token') private readonly tokenModel: Model<Token>,
  ) {}

  async createToken() {
    return {
      msg: 'create a token',
    };
  }
}
