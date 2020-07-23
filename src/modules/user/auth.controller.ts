import { Controller, Post, Body, Param, ParseUUIDPipe, Put, UseInterceptors, ClassSerializerInterceptor, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './user.dto';
import { SigninDto, UpdatePasswordDto } from './auth.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
  constructor (
    private readonly authService: AuthService
  ) {}
  
  @Post('signup')
  @UseInterceptors(ClassSerializerInterceptor)
  async signup (@Body() data: UserDto) {
    return await this.authService.signup(data)
  }

  @Post('signin')
  async signin (@Body() data: SigninDto) {
    return await this.authService.signin(data)
  }

  @Put('password/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthGuard('jwt'))
  async updatePassword (@Param('id', ParseUUIDPipe) id: string, @Body() data: UpdatePasswordDto) {
    return await this.authService.updatePassword(id, data)
  }
}
