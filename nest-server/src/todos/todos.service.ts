import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { DeleteTodoDto } from './dto/delete-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosSerice {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = this.todosRepository.create({
      title: createTodoDto.title,
      isReady: createTodoDto.isReady,
    });
    return await this.todosRepository.save(todo);
  }

  async getTodos(): Promise<Todo[]> {
    return await this.todosRepository.find();
  }

  async updateIsReady(updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const result = await this.todosRepository.update(
      { _id: updateTodoDto._id },
      { isReady: updateTodoDto.isReady },
    );

    if (result.affected === 0) {
      throw new NotFoundException('Todo not found');
    }

    const updatedTodo = await this.todosRepository.findOne({
      where: { _id: updateTodoDto._id },
    });

    if (!updatedTodo) {
      throw new NotFoundException(
        `Todo with ID "${updateTodoDto._id}" was updated but not found`,
      );
    }

    return updatedTodo;
  }

  async deleteTodo(deleteTodoDto: DeleteTodoDto): Promise<Todo> {
    const todo = await this.todosRepository.findOne({
      where: { _id: deleteTodoDto._id },
    });

    if (!todo) {
      throw new NotFoundException(
        `Todo with ID "${deleteTodoDto._id}" not found`,
      );
    }

    await this.todosRepository.delete({ _id: deleteTodoDto._id });

    return todo;
  }
}
