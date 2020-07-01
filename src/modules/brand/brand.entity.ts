import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

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

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

}