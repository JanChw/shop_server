import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoodsAttrSpec } from './goods_attr_spec.entity';
import { GoodsAttrSpecDto } from './goods_attr_spec.dto';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/commons/dto/pagination.dto';

@Injectable()
export class GoodsAttrSpecService {
  constructor (
    @InjectRepository(GoodsAttrSpec)
    private readonly goodsAttrSpec: Repository<GoodsAttrSpec>
  ) {}

  async create (data: GoodsAttrSpecDto) {
    return await this.goodsAttrSpec.save(data)
  }

  async del (id: string) {
    return await this.goodsAttrSpec.delete(id)
  }

  async update (id: string, data: Partial<GoodsAttrSpecDto>) {
    return this.goodsAttrSpec.update(id, data)
  }

  async findAll ( opts: PaginationDto) {
    const { skip, take, type } = opts
    return await this.goodsAttrSpec.findAndCount({
      order: {
        id: type
      },
      skip,
      take,
      relations: ['attr', 'products']
    })
  }

  async findById (id: string) {
    return await this.goodsAttrSpec.find({ id })
  }
}
