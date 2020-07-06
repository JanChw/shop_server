import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Category } from "../category/category.entity";
import { Goods } from "../goods/goods.entity";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 12, nullable: false, unique: true })
  name: string

  @ManyToOne(type => Category, category => category.tags)
  @JoinColumn({ name: 'category_id'})
  category: Category

  @OneToMany(type => Goods, goods => goods.tag, { cascade: true })
  goods: Goods[]

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date


}