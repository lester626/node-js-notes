import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";
import {APIService} from "../../services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  constructor(private apiService: APIService, public router: Router) { }

  ngOnInit(): void {
  }

  onRegister(){
    this.apiService.registerUser(this.user)
      .then((response) => response.json())
      .then((response) => {
        alert(response.message)
        if(response.statusCode == 201) {
          this.router.navigate(['/chat/login']).catch(console.log)
        }
      })
  }

}
