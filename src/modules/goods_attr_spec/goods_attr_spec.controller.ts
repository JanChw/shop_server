import { Controller, Post, Body, Delete, Param, Put, Get } from '@nestjs/common';
import { GoodsAttrSpecService } from './goods_attr_spec.service';
import CatchError from 'src/commons/decorators/catch_error';
import { GoodsAttrSpecDto } from './goods_attr_spec.dto';
import { Pagination } from 'src/commons/decorators/pagination';
import { PaginationDto } from 'src/commons/dto/pagination.dto';

@Controller('goods_attr_spec')
export class GoodsAttrSpecController {
  constructor (
    private readonly goodsAttrSpecService: GoodsAttrSpecService
  ) {}

  @Post('create')
  @CatchError()
  async create (@Body() data: GoodsAttrSpecDto) {
    return await this.goodsAttrSpecService.create(data)
  }


  @Delete('del/:id')
  @CatchError()
  async del (@Param('id') id: string) {
    return this.goodsAttrSpecService.del(id)
  }

  @Put('update/:id')
  @CatchError()
  async update (@Param('id') id: string, @Body() data: Partial<GoodsAttrSpecDto>) {
    return this.goodsAttrSpecService.update(id, data)
  }


  @Get(':id')
  @CatchError()
  async findOne (@Param('id') id: string) {
    return await this.goodsAttrSpecService.findById(id)
  }

  @Get()
  @CatchError()
  async findAll (@Pagination() paginaion: PaginationDto) {
    return await this.goodsAttrSpecService.findAll(paginaion)
  }
}
