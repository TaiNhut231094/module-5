import {Component} from '@angular/core';
import {Student} from "./management-student/student";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-components-interaction';

  // student: Student = {};
  // arrStudent: Student[] = [];
  //
  // studentChangeHandler(value: Event) {
  //   this.student = value;
  //   this.arrStudent.push(this.student);
  // }
}
