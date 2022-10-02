import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {DeleteComponent} from './delete/delete.component';
import {EditComponent} from './edit/edit.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'delete/:id',
    component: DeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
