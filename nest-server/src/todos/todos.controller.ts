import { Body, Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { TodosSerice } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosSerice) {}

  @Get()
  getTodos() {
    return 'Hello world!';
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return createTodoDto;
  }

  @Put()
  updateIsReady(@Req() request: Request) {}

  @Delete()
  deleteTodo(@Req() request: Request) {}
}
