import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todos')
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  title: string;

  @Column({ name: 'is_ready', default: false })
  isReady: boolean;
}
