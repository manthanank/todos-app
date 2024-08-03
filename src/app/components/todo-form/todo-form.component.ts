import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  title = '';
  @Output() todoAdded = new EventEmitter();

  constructor(private todoService: TodoService) { }

  addTodo(): void {
    const newTodo = { title: this.title, completed: false };
    this.todoService.addTodo(newTodo).subscribe(todo => {
      this.todoAdded.emit(todo);
      this.title = '';
    });
  }
}