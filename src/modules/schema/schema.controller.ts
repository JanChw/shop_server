import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { SchemaService } from './schema.service';
import { SchemaDto } from './schema.dto';
import CatchError from '../../commons/decorators/catch_error';
@Controller('schema')
export class SchemaController {
  constructor(
    private readonly schemaService: SchemaService
  ) {}

  @Post()
  @CatchError()
  async create (@Body() data: SchemaDto) {
    return await this.schemaService.store(data)
  }

  @Get(':id')
  @CatchError()
  async findOne (@Param('id') id: string) {
    console.log('=====================')
    return await this.schemaService.findById(id)
  }


}
