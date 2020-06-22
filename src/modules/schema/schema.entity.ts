import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Schema {
  @PrimaryGeneratedColumn('uuid')
  id: string

  // 添加唯一索引
  @Column()
  name: string

  @Column('simple-json')
  columns: Object
}