// lib
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';

// custom
import { UserDocument } from 'src/users/models/user.schema';
import { TokenPayload } from 'src/common/interfaces/token-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: UserDocument, response: Response) {
    // console.log(' ===== user ====' , user)
    const tokenPayload: TokenPayload = {
      userId: user._id.toHexString(),
    };

    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this.configService.get('JWT_EXPIRATION'),
    );

    const token = this.jwtService.sign(tokenPayload , { secret : this.configService.get('JWT_SECRET')});

    // response.cookie('Authentication', token, {
    //   httpOnly: true,
    //   expires,
    // });

    return {
      ... user,
      token : token
    };
  }
}