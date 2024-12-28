// lib
import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';

// custom
import { AuthService } from './auth.service';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { UserDocument } from 'src/users/models/user.schema';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @CurrentUser() user: UserDocument,
    @Res({ passthrough: true }) response: Response,
  ) {
    const jwt = await this.authService.login(user, response);
    response.send(jwt);
  }
}