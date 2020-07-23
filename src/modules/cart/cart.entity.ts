import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { User } from "../user/user.entity";
import { Product } from "../product/product.entity";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  count: number

  @Column({ precision: 2 })
  total_price: number

  @OneToOne(type => User)
  @JoinColumn()
  user: User

  @ManyToMany(type => Product)
  @JoinTable()
  products: Product[]
}