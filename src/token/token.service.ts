import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Token } from './token.model';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel('Token') private readonly tokenModel: Model<Token>,
  ) {}

  async createToken(name: string) {
    try {
      if (!name)
        return {
          code: 400,
          desc: 'Name empty or not defined',
        };

      const findAnotherWithSameName = await this.tokenModel.findOne({ name });
      if (findAnotherWithSameName)
        return {
          code: 400,
          desc: 'existe another token with same name',
        };

      const token = uuidv4();
      const refreshToken = uuidv4();
      const date = new Date();

      const result = await new this.tokenModel({
        name,
        token,
        refreshToken,
        date,
      }).save();
      return { code: 200, result };
    } catch (err) {
      return { code: 500, desc: 'internal Errror' };
    }
  }
}
