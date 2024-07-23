import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { message: 'signup success' };
  }
  login() {
    return { message: 'login success' };
  }
}
