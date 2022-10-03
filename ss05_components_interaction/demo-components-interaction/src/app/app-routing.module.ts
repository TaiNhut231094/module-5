import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./management-student/list/list.component";
import {CreateComponent} from "./management-student/create/create.component";
import {InformationComponent} from "./management-student/information/information.component";


const routes: Routes = [
  {
    path: '',
    component: ListComponent
  }, {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'info/:id',
    component: InformationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
