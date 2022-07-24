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

  @Get()
  async create() {
    return this.service.createToken();
  }
}
