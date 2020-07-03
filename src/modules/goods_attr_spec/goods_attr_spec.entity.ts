import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToMany,ManyToOne, JoinColumn } from "typeorm";
import { GoodsAttr } from "../goods_attr/goods_attr.entity";
import { Product } from "../product/product.entity";

// 商品额外属性对应属性值的表
// todo 关联商品 属性
@Entity()
export class GoodsAttrSpec {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  value: string

  @Column({ default: '' })
  pic_url?: string

  @ManyToOne(type => GoodsAttr, goodsAttr => goodsAttr.values)
  @JoinColumn({ name: 'goods_attr_id' })
  attr: GoodsAttr

  @ManyToMany(type => Product, product => product.attrVals)
  products: Product[]

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date
}