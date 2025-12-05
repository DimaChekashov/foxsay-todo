import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todos/entities/todo.entity';

@Module({
  imports: [
    TodosModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'myuser',
      password: 'mysecretpassword',
      database: 'mydatabase',
      entities: [Todo],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
