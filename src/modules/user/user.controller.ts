import { Controller, Post, Body, Delete, Param, ParseUUIDPipe, Put, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { Pagination } from 'src/commons/decorators/pagination';
import { PaginationDto } from 'src/commons/dto/pagination.dto';

@Controller('user')
export class UserController {
  constructor (
    private readonly userService: UserService
  ) {}

  @Delete('del/:id')
  async delete (@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.delete(id)
  }

  @Put('update/:id')
  async update (@Param('id', ParseUUIDPipe) id: string, @Body() data: Partial<UserDto>) {
    return await this.userService.update(id, data)
  }

  @Get(':id')
  async findOne (@Param('id', ParseUUIDPipe) id: string) {
    return await this.userService.find( {id })
  }

  @Get()
  async findAll (@Pagination() pagination: PaginationDto) {
    return await this.userService.findAll(pagination)
  }

}
