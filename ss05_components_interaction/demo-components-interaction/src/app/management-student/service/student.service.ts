import {Injectable} from '@angular/core';
import {Student} from "../student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [{
    id: 1,
    name: 'Trung PT',
    gender: true,
    address: 'Đà Nẵng'
  }, {
    id: 2,
    name: 'Đạt LT',
    gender: true,
    address: 'Đà Nẵng'
  }, {
    id: 3,
    name: 'Tài LA',
    gender: true,
    address: 'Đà Nẵng'
  }]

  constructor() {
  }

  getAll() {
    return this.students;
  }

  saveStudent(student: Student) {
    this.students.push(student);
  }

  getStudent(id: number) {
    return this.students.find(item => item.id === id);
  }
}
