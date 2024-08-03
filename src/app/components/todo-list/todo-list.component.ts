import { Component, OnInit } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoService } from '../../services/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoFormComponent, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todos = [] as any;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  onTodoAdded(todo: any): void {
    this.todos.push(todo);
  }

  onTodoUpdated(updatedTodo: any): void {
    const index = this.todos.findIndex(
      (todo: any) => todo._id === updatedTodo._id
    );
    this.todos[index] = updatedTodo;
  }

  onTodoDeleted(deletedTodoId: any): void {
    this.todos = this.todos.filter((todo: any) => todo._id !== deletedTodoId);
  }
}
