package oke.projs.todoServer.Controller;

import oke.projs.todoServer.Entity.Todo;
import oke.projs.todoServer.Repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;

    @GetMapping
    public List<Todo> getAllTodos() {
        System.out.println("Hello from get all todos");
        return todoRepository.findAll();
    }

    @PostMapping
    public Todo createTodo(@RequestBody Todo todo) {
        System.out.println(todo.getTitle());
        return todoRepository.save(todo);
    }

    @PutMapping("/{id}")
    public void updateTodo(@PathVariable Long id, @RequestBody Todo todoDetails) {
        Todo todo = todoRepository.findById(id);

        todo.setTitle(todoDetails.getTitle());
        todo.setCompleted(todoDetails.isCompleted());
        todoRepository.save(todo);

    }

    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        Todo todo = todoRepository.findById(id);
        todoRepository.delete(todo);
    }
}
