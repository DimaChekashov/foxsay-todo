import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { TodosSerice } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entity';
import { DeleteTodoDto } from './dto/delete-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosSerice) {}

  @Get()
  getTodos(): Promise<Todo[]> {
    return this.todosService.getTodos();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todosService.createTodo(createTodoDto);
  }

  @Put()
  async updateIsReady(@Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todosService.updateIsReady(updateTodoDto);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteTodo(@Body() deleteTodoDto: DeleteTodoDto) {
    return this.todosService.deleteTodo(deleteTodoDto);
  }
}
