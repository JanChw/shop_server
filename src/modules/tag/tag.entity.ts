import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "../category/category.entity";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 12, nullable: false, unique: true })
  name: string

  @ManyToOne(type => Category, category => category.tags)
  @JoinColumn({ name: 'category_id'})
  category: Category

  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date


}