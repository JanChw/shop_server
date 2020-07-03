import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, OneToMany } from "typeorm";
import { GoodsAttrSpec } from "../goods_attr_spec/goods_attr_spec.entity";

// 商品额外属性表
@Entity()
export class GoodsAttr {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ length: 32 })
  name: string

  @Column({ default: 999 })
  sort_order?: number

  @OneToMany(type => GoodsAttrSpec, goodsAddrSpec => goodsAddrSpec.attr)
  values: GoodsAttrSpec[]

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date

}