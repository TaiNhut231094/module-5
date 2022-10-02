import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoRoutingModule} from './todo-routing.module';
import {EditComponent} from './edit/edit.component';
import {DeleteComponent} from './delete/delete.component';
import {ListComponent} from './list/list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ListComponent, EditComponent, DeleteComponent],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TodoModule { }
