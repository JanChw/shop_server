import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Goods } from "../goods/goods.entity";

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 30, nullable: false, unique: true })
  name: string

  @Column({ default: '' })
  brief?: string

  @Column({ default: '' })
  desc?: string

  @OneToMany(type => Goods, goods => goods.brand)
  goods: Goods[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

}