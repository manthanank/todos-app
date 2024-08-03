import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo = { _id: '', title: '', completed: false };
  @Output() todoUpdated = new EventEmitter();
  @Output() todoDeleted = new EventEmitter();
  
  isEditing = false;

  constructor(private todoService: TodoService) {}

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  updateTodo(): void {
    this.todoService.updateTodo(this.todo).subscribe((updatedTodo) => {
      this.todoUpdated.emit(updatedTodo);
    });
  }

  deleteTodo(): void {
    this.todoService.deleteTodo(this.todo._id).subscribe(() => {
      this.todoDeleted.emit(this.todo._id);
    });
  }
}
