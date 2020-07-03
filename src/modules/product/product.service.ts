import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductDto } from './product.dto';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/commons/dto/pagination.dto';

@Injectable()
export class ProductService {
  constructor (
    @InjectRepository(Product)
    private readonly product: Repository<Product>
  ) {}

  async create (data: ProductDto) {
    return await this.product.save(data)
  }

  async del (id: string) {
    return await this.product.delete(id)
  }

  async update (id: string, data: Partial<ProductDto>) {
    return this.product.update(id, data)
  }

  async findAll ( opts: PaginationDto) {
    const { skip, take, type } = opts
    return await this.product.findAndCount({
      order: {
        id: type
      },
      skip,
      take,
      relations: ['attrVals']
    })
  }

  async findById (id: string) {
    return await this.product.find({ id })
  }
}
