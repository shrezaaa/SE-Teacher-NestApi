import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Get('roles')
  getProfessors() {
    return this.AuthService.getRoles();
  }

  @Post('signUp')
  signUp(@Body() body){
    return this.AuthService.signUp(body);
  }
}
