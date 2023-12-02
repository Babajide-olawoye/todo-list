package oke.projs.todoServer.Repository;

import oke.projs.todoServer.Entity.Todo;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface TodoRepository extends Repository<Todo, Long> {
    Todo findById(Long id);

    Todo save(Todo todo);

    List<Todo> findAll();

    void delete(Todo todo);

}
