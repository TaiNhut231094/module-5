import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListComponent} from "./management-student/list/list.component";
import {CreateComponent} from "./management-student/create/create.component";
import {InformationComponent} from "./management-student/information/information.component";

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ListComponent,
    CreateComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
