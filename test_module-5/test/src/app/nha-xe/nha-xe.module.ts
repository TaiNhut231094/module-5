import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NhaXeRoutingModule} from './nha-xe-routing.module';
import {ListComponent} from './list/list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {CreateComponent} from './create/create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EditComponent} from './edit/edit.component';


@NgModule({
  declarations: [ListComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    NhaXeRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class NhaXeModule {
}
