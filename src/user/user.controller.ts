import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  @UseGuards(AuthGuard)
  @Get('test')
  getMe(@Request() req) {
    return req.user;
  }
}
