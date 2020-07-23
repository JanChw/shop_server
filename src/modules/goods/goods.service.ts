import { Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Goods } from './goods.entity';
import { Repository } from 'typeorm';
import { GoodsDto } from './goods.dto';
import { PaginationDto } from 'src/commons/dto/pagination.dto';

@Injectable()
export class GoodsService {
  constructor (
    @InjectRepository(Goods)
    private readonly goods: Repository<Goods>
  ) {}

  async create (data: GoodsDto) {
    return await this.goods.save(data)
  }

  async del (id: string) {
    return await this.goods.delete(id)
  }

  async delMany (ids: string[]) {
    return await this.goods.delete(ids)
  }

  async update (id: string, data: Partial<GoodsDto>) {
    return await this.goods.update(id, data)
  }

  async updateMany (ids: string[], data: Partial<GoodsDto>) {
    return await this.goods.createQueryBuilder('updateMany')
      .update(Goods)
      .set(data)
      .whereInIds(ids)
      .execute()
  }

  async findById (id: string) {
    return await this.goods.find({ id })
  }

  async findAll (opts: PaginationDto) {
    const { skip, take, type } = opts

    // return await this.goods.findAndCount({
    //   order: {
    //     'sort_order': type,
    //     'sell_volume': type,
    //     'id': type
    //   },
    //   skip,
    //   take,
    //   relations: ['category', 'brand', 'tag']
    // })
     return await this.goods.createQueryBuilder('goods')
      .leftJoin('goods.category', 'category')
      .addSelect('category.name')
      .leftJoin('goods.brand', 'brand')
      .addSelect(['brand.name'])
      .leftJoin('goods.tag', 'tag')
      .addSelect('tag.name')
      .orderBy({
        'goods.sort_order': type,
        'goods.sell_volume': type,
        'goods.id': type
      })
      .skip(skip)
      .take(take)
      .getManyAndCount()
  }
}
