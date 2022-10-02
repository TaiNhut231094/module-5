import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../service/todo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: number;
  todoForm: FormGroup;

  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
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

  ngOnInit(): void {
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.router.navigateByUrl('todo');
    });
  }
}
