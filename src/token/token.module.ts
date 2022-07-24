import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenSchema } from './token.model';
import { TokenController } from './token.controller';
import { TokenService } from './token.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Token',
        schema: TokenSchema,
      },
    ]),
  ],
  providers: [TokenService],
  controllers: [TokenController],
})
export class TokenModule {}
