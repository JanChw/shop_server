import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Staff } from './staff.entity';
import { Repository } from 'typeorm';
import { StaffDto } from './staff.dto';
import { PaginationDto } from 'src/commons/dto/pagination.dto';

@Injectable()
export class StaffService {
  @InjectRepository(Staff)
  private readonly staff: Repository<Staff>

  async create (data: StaffDto) {
    return await this.staff.save(data)
  }

  async del (id: string) {
    return await this.staff.delete(id)
  }

  async update (id: string, data: Partial<StaffDto>) {
    return await this.staff.update(id, data)
  }

  async findById (id: string) {
    return await this.staff.find({ id })
  }

  async findAll (opts: PaginationDto) {
    const { skip, take, type } = opts
    return this.staff.findAndCount({
      order: {
        join_date: type
      },
      skip,
      take
    })
  }
}
