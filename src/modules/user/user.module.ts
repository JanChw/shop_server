import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './jwt.strategy'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'online_shop',
      signOptions: {
        expiresIn: '12h'
        // algorithm: 'RS256'
      }
    }),
    PassportModule
  ],
  controllers: [UserController, AuthController],
  providers: [UserService, AuthService, JwtStrategy]
})
export class UserModule {}
