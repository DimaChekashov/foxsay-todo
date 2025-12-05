import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosSerice } from './todos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodosController],
  providers: [TodosSerice],
})
export class TodosModule {}
