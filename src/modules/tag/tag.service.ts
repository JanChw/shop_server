import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { Repository } from 'typeorm';
import { TagDto } from './tag.dto';
import { PaginationDto } from 'src/commons/dto/pagination.dto';

@Injectable()
export class TagService {
  constructor (
    @InjectRepository(Tag)
    private readonly tag: Repository<Tag>
  ) {}

  async create (data: TagDto) {
    return await this.tag.save(data)
  }

  async deleteMany (ids: number[]) {
    return await this.tag.delete(ids)
  }

  async update (id: number, data: TagDto) {
    return this.tag.update(id, data)
  }

  async findAll ( opts: PaginationDto) {
    const { skip, take, type } = opts
    return await this.tag.findAndCount({
      order: {
        id: type
      },
      skip,
      take,
      relations: ['category']
    })
  }

  async findById (id: number) {
    return await this.tag.find({ id })
  }
}
