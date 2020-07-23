import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Staff {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  phone: string

  @Column()
  name: string

  @Column()
  nickname: string

  @Column()
  avatar: string

  @Column()
  gendar: string

  @Column()
  intro: string

  @Column()
  age: string

  @Column()
  join_date: Date

  @Column()
  leave_date: Date

}