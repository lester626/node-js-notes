import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";
import {APIService} from "../../services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User;
  constructor(private apiService: APIService, public router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.apiService.signIn(this.user)
      .then((response) => response.json())
      .then((response) => {
        if(response.statusCode == 200) {
          alert(response.message);
          sessionStorage.setItem('userData', JSON.stringify(response.data))
          this.router.navigate(['/chat/profile'])
        }
      }).catch((ex) => {
        console.log(ex.message);
    })
  }

}
