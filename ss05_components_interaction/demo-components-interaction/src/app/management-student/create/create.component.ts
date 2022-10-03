import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from "../student";
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../service/student.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  student: Student = {};

  @Output() createStudent: EventEmitter<Student> = new EventEmitter<Student>();

  studentForm = new FormGroup({
  id: new FormControl(),
  name: new FormControl(),
  gender: new FormControl(),
  address: new FormControl(),
});

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  createNewStudent() {
    this.createStudent.emit(this.student);
    this.student = {};
  }

  submit() {
    this.studentService.saveStudent(this.studentForm.value);
    this.studentForm.reset();
    this.createStudent.emit(this.student);
  }
}
