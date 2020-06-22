import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Schema {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ApiProperty({description: '模型名称, 不能重名', example: 'model_test'})
  // @Column({ unique: true })
  @Column()
  name: string

  @ApiProperty()
  @Column('simple-json')
  columns: Object
}

