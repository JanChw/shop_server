import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Tag } from "../tag/tag.entity";

// todo 全局配置时间字段
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 32, nullable: false, unique: true })
  name?: string

  @Column({ default: ''})
  banner_url?: string

  @Column({ default: ''})
  wap_banner_url?: string

  @Column()
  image_url: string

  @Column({ default: ''})
  desc?: string

  @Column('bool', { default: true })
  is_show: boolean

  @OneToMany(type => Tag, tag => tag.category)
  tags: Tag[]

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date
}