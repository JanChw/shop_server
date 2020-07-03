import { Controller, Post, Body, Delete, Param, Put, Get } from '@nestjs/common';
import { GoodsAttrService } from './goods_attr.service';
import CatchError from 'src/commons/decorators/catch_error';
import { GoodsAttrDto } from './goods_attr.dto';
import { Pagination } from 'src/commons/decorators/pagination';
import { PaginationDto } from 'src/commons/dto/pagination.dto';

@Controller('goods_attr')
export class GoodsAttrController {
  constructor (
    private readonly goodsAttrService: GoodsAttrService
  ) {}
  
  @Post('create')
  @CatchError()
  async create (@Body() data: GoodsAttrDto) {
    return await this.goodsAttrService.create(data)
  }


  @Delete('del/:id')
  @CatchError()
  async del (@Param('id') id: string) {
    return this.goodsAttrService.del(id)
  }

  @Put('update/:id')
  @CatchError()
  async update (@Param('id') id: string, @Body() data: Partial<GoodsAttrDto>) {
    return this.goodsAttrService.update(id, data)
  }


  @Get(':id')
  @CatchError()
  async findOne (@Param('id') id: string) {
    return await this.goodsAttrService.findById(id)
  }

  @Get()
  @CatchError()
  async findAll (@Pagination() paginaion: PaginationDto) {
    return await this.goodsAttrService.findAll(paginaion)
  }
}
