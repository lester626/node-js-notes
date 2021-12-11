import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {
  APIUrl = "https://reqres.in/api/"
  students: Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    fetch(this.APIUrl + 'users', {
      method: 'GET'
    }).then((response) =>   response.json())
      .then((response) => {
        this.students = response.data;
      })
  }

}
