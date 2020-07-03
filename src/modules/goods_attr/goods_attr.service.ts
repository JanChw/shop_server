import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoodsAttr } from './goods_attr.entity';
import { GoodsAttrDto } from './goods_attr.dto';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/commons/dto/pagination.dto';

@Injectable()
export class GoodsAttrService {
  constructor (
    @InjectRepository(GoodsAttr)
    private readonly goodsAttr: Repository<GoodsAttr>
  ) {}

  async create (data: GoodsAttrDto) {
    return await this.goodsAttr.save(data)
  }

  async del (id: string) {
    return await this.goodsAttr.delete(id)
  }

  async update (id: string, data: Partial<GoodsAttrDto>) {
    return this.goodsAttr.update(id, data)
  }

  async findAll ( opts: PaginationDto) {
    const { skip, take, type } = opts
    return await this.goodsAttr.findAndCount({
      order: {
        id: type
      },
      skip,
      take,
      relations: ['values']
    })
  }

  async findById (id: string) {
    return await this.goodsAttr.find({ id })
  }
}
