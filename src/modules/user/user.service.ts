import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository, FindConditions } from 'typeorm';
import { UserDto } from './user.dto';
import { PaginationDto } from 'src/commons/dto/pagination.dto';

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User)
    private readonly user: Repository<User>
  ) {}

  async delete (id: string) {
    return await this.user.delete(id)
  }

  async update (id: string, data: Partial<UserDto>) {
    return this.user.update(id, data)
  }

  async find (data: FindConditions<User>) {
    console.log(data)
    return this.user.findOne( data )
  }

  async findAll (opts: PaginationDto) {
    const { skip, take, type } = opts
    return await this.user.findAndCount({
      order: {
        created_at: type
      },
      skip,
      take
    })
  }
}
