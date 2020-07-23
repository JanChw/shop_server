import { Injectable, NotFoundException, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { JwtService } from '@nestjs/jwt'
import { User } from './user.entity';
import { SigninDto, UpdatePasswordDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor (
   @InjectRepository(User)
   private readonly user: Repository<User>,
   private readonly jwtService: JwtService
  ) {}

  async signup (data: UserDto) {
    const _userEntity = await this.user.findOne({ phone: data.phone })
    if (_userEntity) throw new BadRequestException('手机号已被注册,请换个手机号再试')

    const userEntity = await this.user.create(data)
    await this.user.save(userEntity)
    return userEntity
  }

  async signin (data: SigninDto) {
    const { phone, password } = data
    const userEntity = await this.user.findOne({ phone })
    if (!userEntity) throw new NotFoundException('用户不存在')

    const isEqual = await userEntity.comparePassword(password)
    console.log(isEqual)
    if (!isEqual) throw new UnauthorizedException('密码错误')

    const payload = { id: userEntity.id, phone }
    const token = this.jwtService.sign(payload)

    return { ...payload, token }
  }

  async updatePassword (id: string, data: UpdatePasswordDto) {
    const userEntity = await this.user.findOne({ id })
    console.log('--------1-----------')
    if (!userEntity) throw new NotFoundException('用户不存在')
    console.log('--------1-----------')
    const { password, newPassword } = data
    const isEqual = await userEntity.comparePassword(password)
    if (!isEqual) throw new BadRequestException('原密码输入错误，请重新输入')

    userEntity.password = newPassword
    return await this.user.save(userEntity)
  }

}
