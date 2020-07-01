import { Controller, Post, Delete, Put, Query, Param, ParseIntPipe, Body, Get } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandDto } from './brand.dto';
import CatchError from 'src/commons/decorators/catch_error';
import { Pagination } from 'src/commons/decorators/pagination';
import { PaginationDto } from 'src/commons/dto/pagination.dto';


// todo 全局方法装饰器
@Controller('brand')
export class BrandController {
  constructor (
    private readonly brandService: BrandService
  ) {}

  @Post('create')
  @CatchError()
  async create (@Body() data: BrandDto) {
    return await this.brandService.create(data)
  }

  @Delete('del')
  @CatchError()
  async deleteMany (@Query('ids') ids: []) {
    const _ids = ids.map(id => Number(id))
    return this.brandService.deleteMany(_ids)
  }

  @Put('update/:id')
  @CatchError()
  async update (@Param('id', ParseIntPipe) id: number, @Body() data: Partial<BrandDto>) {
    return this.brandService.update(id, data)
  }

  @Get(':id')
  @CatchError()
  async findOne (@Param('id', ParseIntPipe) id: number) {
    return await this.brandService.findById(id)
  }

  @Get()
  @CatchError()
  async findAll (@Pagination() paginaion: PaginationDto) {
    return await this.brandService.findAll(paginaion)
  }

}
