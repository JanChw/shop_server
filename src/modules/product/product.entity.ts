import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { GoodsAttrSpec } from "../goods_attr_spec/goods_attr_spec.entity";


// 关联商品 属性值
@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column( { default: 0 })
  goods_number?: number

  @Column({ precision: 2 })
  retail_price: number

  @ManyToMany(type => GoodsAttrSpec)
  @JoinTable()
  attrVals: GoodsAttrSpec[]

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date

}