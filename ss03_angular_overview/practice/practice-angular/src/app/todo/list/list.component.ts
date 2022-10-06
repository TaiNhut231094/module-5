import {Component, OnInit} from '@angular/core';
import {Todo} from '../../model/todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../../service/todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  content = new FormControl();
  todos: Todo[] = [];

  constructor(private todoService: TodoService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  getAll() {
    this.todoService.getAll().subscribe(todos => {
      this.todos = todos;
    });
  }
  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        content: value,
        complete: false
      };
      this.todoService.saveTodo(todo).subscribe(next => {
        this.content.reset();
        // this.router.navigateByUrl('');
      });
    }
  }
}
