import { Controller, Post, Body, Delete, Param, ParseIntPipe, Put, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './category.dto';
import { Pagination } from 'src/commons/decorators/pagination';
import { PaginationDto } from 'src/commons/dto/pagination.dto';

@Controller('category')
export class CategoryController {
  constructor (
    private readonly categoryService: CategoryService
  ) {}

  @Post('create')
  async create (@Body() data: CategoryDto) {
    return await this.categoryService.create(data)
  }

  @Delete('del/:id')
  async delete (@Param('id', ParseIntPipe) id: number) {
    return await this.categoryService.del(id)
  }

  @Put('update/:id')
  async update (@Param('id', ParseIntPipe) id: number, data: Partial<CategoryDto>) {
    return await this.categoryService.update(id, data)
  }

  @Get(':id')
  async findOne (@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.findById(id)
  }

  @Get()
  async findAll (@Pagination() data: PaginationDto) {
    return this.categoryService.findAll(data)
  }
}
