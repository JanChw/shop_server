import { Controller, Post, Body, Delete, Param, ParseUUIDPipe, Put, Get } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffDto } from './staff.dto';
import { report } from 'process';
import { Pagination } from 'src/commons/decorators/pagination';
import { PaginationDto } from 'src/commons/dto/pagination.dto';

@Controller('staff')
export class StaffController {
  constructor (
    private readonly staffService: StaffService
  ) {}

  @Post('create')
  async create (@Body() data: StaffDto) {
    return await this.staffService.create(data)
  }

  @Delete('del/:id')
  async delete (@Param('id', ParseUUIDPipe) id: string) {
    return await this.staffService.del(id)
  }

  @Put('create/:id')
  async update (@Param('id', ParseUUIDPipe) id: string, data: Partial<StaffDto>) {
    return await this.staffService.update(id, data)
  }

  @Get(':id')
  async findOne (@Param('id', ParseUUIDPipe) id: string) {
    return await this.staffService.findById(id)
  }

  @Get()
  async findAll (@Pagination() pagination: PaginationDto) {
    return await this.staffService.findAll(pagination)
  }
}
