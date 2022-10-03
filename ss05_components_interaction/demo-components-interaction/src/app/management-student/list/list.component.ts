import { Component, OnInit } from '@angular/core';
import {StudentService} from "../service/student.service";
import {Student} from "../student";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  students: Student[] = [];
  tempStudent: Student = {};

  constructor(private studentService: StudentService, private route: Router) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.students = this.studentService.getAll();
  }

  detailStudent(item: Student) {
    this.tempStudent = item;
    this.route.navigate(["/info", item.id])
  }
}
