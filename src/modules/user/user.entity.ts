import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, BeforeInsert, BeforeUpdate } from "typeorm";
import { Exclude } from 'class-transformer'
import * as bcrypt from 'bcrypt'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 13, nullable: false, unique: true })
  phone: string

  @Column({ nullable: false })
  @Exclude()
  password: string

  @Column({ default: '' })
  nickname?: string

  @Column({ default: '' })
  avatar?: string

  @Column({ default: '' })
  address?: string

  @Column({ default: false })
  isMember?: boolean


  @UpdateDateColumn()
  updated_at: Date

  @CreateDateColumn()
  created_at: Date

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword () {
    this.password = await bcrypt.hash(this.password, 10)
  }

  async comparePassword (password) {
    return await bcrypt.compare(password, this.password)
  }

}