import { Controller, Get, Patch, UseGuards, Body } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('test')
  getMe(@GetUser() user) {
    return user;
  }
  @Patch('update')
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    this.userService.editUser(userId, dto);
  }
}
