import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Schema } from './schema.entity';
import { Repository } from 'typeorm';
import { SchemaDto } from './schema.dto';

@Injectable()
export class SchemaService {
  constructor(
    @InjectRepository(Schema)
    private readonly schema: Repository<Schema>
  ) {}

  async store (data: SchemaDto) {
    return await this.schema.save(data)
  }

  async findById (id: string) {
    return await this.schema.findOne(id)
  }
}
