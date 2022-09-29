import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [DetailComponent, RegisterFormComponent],
    exports: [
        RegisterFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class DictionaryModule { }
