import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  APIUrl = "https://api-nodejs-todolist.herokuapp.com";
  /*student: Student = new Student();*/
  studentForm = this.formBuilder.group(
    {
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      password: ''
    }
  )
  constructor(
    private formBuilder:FormBuilder,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmitStudentForm(){
    let student = this.studentForm.value;
    fetch(this.APIUrl + '/user/register', {
      method: 'POST', // GET | POST | PUT | DELETE
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: student.firstName + ' ' + student.lastName,
        email: student.email,
        password: student.password,
        age: student.age
      })
    }).then( async (response)=> {
      if(response.status != 201) {
        throw new Error(await response.text())
      }
      return response.json()
    })
      .then((response)=> {
        alert(response.user.name + " Added Successfully!")
        this.router.navigate(['/students']).catch(console.log)
      }).catch((error) => {
        alert(error)
    })
  }
}
