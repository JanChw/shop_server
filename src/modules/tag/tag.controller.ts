import { Controller, Post, Body, Delete, Put, Param, Get, Query, ParseIntPipe } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagDto } from './tag.dto';
import CatchError from 'src/commons/decorators/catch_error';
import { Pagination } from 'src/commons/decorators/pagination';
import { PaginationDto } from 'src/commons/dto/pagination.dto';

@Controller('tag')
export class TagController {
  constructor (
    private readonly tagService: TagService
  ) {}

  @Post('create')
  @CatchError()
  async create (@Body() data: TagDto) {
    return await this.tagService.create(data)
  }

  @Delete('del')
  @CatchError()
  async deleteMany (@Query('ids') ids: []) {
    const _ids = ids.map(id => Number(id))
    return this.tagService.deleteMany(_ids)
  }

  @Put('update/:id')
  @CatchError()
  async update (@Param('id', ParseIntPipe) id: number, @Body() data: TagDto) {
    return this.tagService.update(id, data)
  }

  @Get(':id')
  @CatchError()
  async findOne (@Param('id', ParseIntPipe) id: number) {
    return await this.tagService.findById(id)
  }

  @Get()
  @CatchError()
  async findAll (@Pagination() paginaion: PaginationDto) {
    return await this.tagService.findAll(paginaion)
  }
}
