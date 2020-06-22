import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { SchemaService } from './schema.service';
import { SchemaDto } from './schema.dto';
import CatchError from '../../commons/decorators/catch_error';
import { Schema } from "../../commons/decorators/schema";
import { ApiTags, ApiParam, ApiBody } from "@nestjs/swagger";

@ApiTags('模型')
@Controller('schema')
export class SchemaController {
  constructor(
    private readonly schemaService: SchemaService
  ) {}

  @ApiBody({
    description: '创建模型',
    type: SchemaDto
  })
  @Post()
  @CatchError()
  async create (@Schema() data: SchemaDto) {
    console.log(data)
    return await this.schemaService.store(data)
  }

  @ApiParam({
    description: '获取模型数据',
    name: 'id',
    type: String
  })
  @Get(':id')
  @CatchError()
  async findOne (@Param('id') id: string) {
    console.log('=====================')
    return await this.schemaService.findById(id)
  }


}
