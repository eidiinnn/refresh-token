import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Token } from './token.model';
import { TokenService } from './token.service';

@Controller('Token')
export class TokenController {
  constructor(private service: TokenService) {}

  @Post()
  async create(@Body() data: Token) {
    debugger;
    return this.service.createToken(data.name);
  }
}
