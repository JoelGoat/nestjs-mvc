// no, title, contents, date, user
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class PostsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  content: string

  @Column()
  date: string

  @Column()
  user: string
}
