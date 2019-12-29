package com.codersignh.todolist.repo;

import com.codersignh.todolist.model.TodoItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepo extends JpaRepository<TodoItem, Long>{
}
