import {Component, OnInit} from '@angular/core';
import {Todo} from './todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  toggleTodo(todo) {
    todo.complete = !todo.complete;
    this.todoService.update(todo.id, todo).subscribe(r =>
      this.getAll());
  }

  getAll() {
    this.todoService.getAllTodo().subscribe(todos => {
      console.log(todos);
      this.todos = todos;
    });
  }

  addTodo() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.save(todo).subscribe(r => {
        this.getAll();
      });
      this.content.reset();
    }
  }

  deleteTodo(id: number) {
    this.todoService.delete(id).subscribe(r => {
      this.getAll();
    });
  }
}
