import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { CategoryDto } from './category.dto';
import { PaginationDto } from 'src/commons/dto/pagination.dto';

@Injectable()
export class CategoryService {
  constructor (
    @InjectRepository(Category)
    private readonly category: Repository<Category>
  ) {}

  async create (data: CategoryDto) {
    return this.category.save(data)
  }

  async del (id: number) {
    return await this.category.delete(id)
  }

  async update (id: number, data: Partial<CategoryDto>) {
    return await this.category.update(id, data)
  }

  async findAll (opts: PaginationDto) {
    const { skip, take, type } = opts
    return await this.category.findAndCount({
      order: {
        id: type
      },
      skip,
      take,
      relations: ['tags', 'goods']
    })
  }

  async findById (id: number) {
    return await this.category.find({ id })
  }
}
