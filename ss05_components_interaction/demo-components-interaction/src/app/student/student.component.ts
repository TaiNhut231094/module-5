import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from "../management-student/student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student = {};

  @Output() createStudent: EventEmitter<Student> = new EventEmitter<Student>();

  constructor() {
  }

  ngOnInit(): void {
  }

  createNewStudent() {
    this.createStudent.emit(this.student);
    this.student = {};
  }
}
