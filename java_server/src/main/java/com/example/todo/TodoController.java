package com.example.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.todo.Todo;
import com.example.todo.TodoRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/todos")
public class TodoController {
    
    @Autowired
    private TodoRepository todoRepository;

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable Integer id) {
        Optional<Todo> todo = todoRepository.findById(id);

        return todo.map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Todo createTodo(@RequestBody Todo todo) {
        return todoRepository.save(todo);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable Integer id, @RequestBody Todo todoDetails) {
        Optional<Todo> todoOptional = todoRepository.findById(id);
        
        if (todoOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        
        Todo todo = todoOptional.get();
        todo.setTitle(todoDetails.getTitle());
        todo.setIsReady(todoDetails.getIsReady());
        
        Todo updatedTodo = todoRepository.save(todo);
        return ResponseEntity.ok(updatedTodo);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Integer id) {
        if (!todoRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        
        todoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
    
    @PatchMapping("/{id}/toggle")
    public ResponseEntity<Todo> toggleTodo(@PathVariable Integer id) {
        Optional<Todo> todoOptional = todoRepository.findById(id);
        
        if (todoOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        
        Todo todo = todoOptional.get();
        todo.setIsReady(!todo.getIsReady());
        
        Todo updatedTodo = todoRepository.save(todo);
        return ResponseEntity.ok(updatedTodo);
    }
}
