import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './brand.entity';
import { Repository } from 'typeorm';
import { BrandDto } from './brand.dto';
import { PaginationDto } from 'src/commons/dto/pagination.dto';

@Injectable()
export class BrandService {
 
  constructor (
    @InjectRepository(Brand)
    private readonly brand: Repository<Brand>
  ) {
  }

  async create (data: BrandDto) {
    return await this.brand.save(data)
  }

  async deleteMany (ids: number[]) {
    return await this.brand.delete(ids)
  }

  async update (id: number, data: Partial<BrandDto>) {
    return this.brand.update(id, data)
  }

  async findAll ( opts: PaginationDto, type: -1 | 1) {
    console.log(typeof type)
    console.log(opts)
    return await this.brand.find({
      order: {
        id: type
      },
      ...opts
    })
  }

  async findById (id: number) {
    return await this.brand.find({ id })
  }
}
