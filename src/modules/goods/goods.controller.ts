import { Controller, Post, Body, Delete, Param, ParseUUIDPipe, Put, Get } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsDto } from './goods.dto';
import { Pagination } from 'src/commons/decorators/pagination';
import { PaginationDto } from 'src/commons/dto/pagination.dto';


// todo 简化代码，新建baseservice basecontroller
@Controller('goods')
export class GoodsController {
  constructor (
    private readonly goodsService: GoodsService
  ) {}

  @Post('create')
  async create (@Body() data: GoodsDto) {
    return this.goodsService.create(data)
  }

  @Delete('del/:id')
  async del (@Param('id', ParseUUIDPipe) id: string) {
    return this.goodsService.del(id)
  }

  @Put('update/:id')
  async update (@Param('id', ParseUUIDPipe) id: string, @Body() data: Partial<GoodsDto>) {
    console.log('==========update=============')
    console.log(id, data)
    return this.goodsService.update(id, data)
  }

  @Get(':id')
  async findOnde (@Param('id', ParseUUIDPipe) id: string) {
    return this.goodsService.findById(id)
  }

  @Get()
  async findAll (@Pagination() pagination: PaginationDto) {
    console.log('=============all==============')
    return this.goodsService.findAll(pagination)
  }
}
