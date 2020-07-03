import { Controller, Post, Delete, Put, Body, Param, Get, ParseUUIDPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';
import CatchError from 'src/commons/decorators/catch_error';
import { Pagination } from 'src/commons/decorators/pagination';
import { PaginationDto } from 'src/commons/dto/pagination.dto';

@Controller('product')
export class ProductController {
  constructor (
    private readonly productService: ProductService
  ) {}

  @Post('create')
  @CatchError()
  async create (@Body() data: ProductDto) {
    return await this.productService.create(data)
  }


  @Delete('del/:id')
  @CatchError()
  async del (@Param('id', ParseUUIDPipe) id: string) {
    return this.productService.del(id)
  }

  @Put('update/:id')
  @CatchError()
  async update (@Param('id', ParseUUIDPipe) id: string, @Body() data: Partial<ProductDto>) {
    return this.productService.update(id, data)
  }


  @Get(':id')
  @CatchError()
  async findOne (@Param('id', ParseUUIDPipe) id: string) {
    return await this.productService.findById(id)
  }

  @Get()
  @CatchError()
  async findAll (@Pagination() paginaion: PaginationDto) {
    return await this.productService.findAll(paginaion)
  }
}
