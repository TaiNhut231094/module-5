import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingBarComponentComponent } from './rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './dictionary/list/list.component';
import {DictionaryModule} from './dictionary/dictionary.module';

@NgModule({
  declarations: [
    AppComponent,
    RatingBarComponentComponent,
    CountdownTimerComponent,
    RegisterComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DictionaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
