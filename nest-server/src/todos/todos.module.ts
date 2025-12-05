import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosSerice } from './todos.service';

@Module({
  controllers: [TodosController],
  providers: [TodosSerice],
})
export class TodosModule {}
