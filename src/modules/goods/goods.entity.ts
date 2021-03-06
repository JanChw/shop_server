import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "../category/category.entity";
import { Tag } from "../tag/tag.entity";
import { Brand } from "../brand/brand.entity";
import { GoodsSale } from "src/commons/enums/goods_sale";



// 简化返回字段
// 添加商品价格列表
@Entity()
export class Goods {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 30, nullable: false, unique: true })
  name: string

  @Column()
  goods_brief: string

  @Column()
  goods_desc: string

  @Column({ default: 9999 })
  sort_order?: number

  @Column({ default: 0 })
  goods_number?: number

  @Column({ default: 0 })
  sell_volume?: number

  @Column()
  primary_pic_url: string

  @Column()
  list_pic_url: string

  @Column({ default: GoodsSale.ON_SALE })
  is_on_sale: GoodsSale

  @Column({ default: false })
  is_delete?: boolean

  @Column({ default: false })
  is_new?: boolean

  @Column({ default: false })
  is_hot?: boolean

  @ManyToOne( type => Category, category => category.goods)
  @JoinColumn({ name: 'category_id'})
  category: Category

  @ManyToOne( type => Brand, brand => brand.goods)
  @JoinColumn({ name: 'brand_id'})
  brand: Brand

  @ManyToOne( type => Tag, tag => tag.goods)
  @JoinColumn({ name: 'tag_id'})
  tag: Tag

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date

}
