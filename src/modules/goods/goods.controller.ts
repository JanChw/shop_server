import { Controller, Post, Body, Delete, Param, ParseUUIDPipe, Put, Get } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsDto, UpdateManyGoodsDto } from './goods.dto';
import { Pagination } from 'src/commons/decorators/pagination';
import { PaginationDto } from 'src/commons/dto/pagination.dto';
import CatchError from 'src/commons/decorators/catch_error';



// todo 简化代码，新建baseservice basecontroller
@Controller('goods')
export class GoodsController {
  constructor (
    private readonly goodsService: GoodsService
  ) {}

  @Post('create')
  @CatchError()
  async create (@Body() data: GoodsDto) {
    return this.goodsService.create(data)
  }

  @Delete('del/:id')
  async del (@Param('id', ParseUUIDPipe) id: string) {
    return this.goodsService.del(id)
  }

  @Delete('dels')
  async dels (@Body() ids: string[]) {
    return this.goodsService.delMany(ids)
  }

  @Put('update/:id')
  async update (@Param('id', ParseUUIDPipe) id: string, @Body() data: Partial<GoodsDto>) {
    console.log('==========update=============')
    console.log(id, data)
    return this.goodsService.update(id, data)
  }

  @Put('updates')
  async updateMany (@Body() data: Partial<UpdateManyGoodsDto>) {
    const { ids, ...goods } = data
    console.log(ids, goods)
    console.log('=====================')
    return this.goodsService.updateMany(ids, goods)
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
