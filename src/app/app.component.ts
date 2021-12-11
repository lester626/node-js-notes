import { Component } from '@angular/core';
import {Student} from "./model/student.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentList: Array<Student> =[];

  title = 'Student';

  onAddStudent(newStudent: string) {
    this.studentList.push(new Student(1, newStudent))
  }

  onProfileView(student: Student) {

  }
}
