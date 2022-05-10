import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class AuthService {
  signin() {
    return { msg: 'signed in' };
  }

  signup() {
    return { msg: 'signed up' };
  }
}
