import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../service/todo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  todoForm: FormGroup;

  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getTodo(this.id);
    });
  }

  getTodo(id: number) {
    return this.todoService.findById(id).subscribe(todo => {
      this.todoForm = new FormGroup({
        id: new FormControl(todo.id),
        content: new FormControl(todo.content),
        complete: new FormControl(todo.complete),
      });
    });
  }

  updateTodo(id: number) {
    const todo = this.todoForm.value;
    this.todoService.updateTodo(id, todo).subscribe(next => {
      this.router.navigateByUrl('');
    });
  }
}
