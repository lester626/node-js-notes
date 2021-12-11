import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  constructor() { }

  ngOnInit(): void {
    let user = sessionStorage.getItem('userData');
    if(user) {
      console.log(user)
      this.user = JSON.parse(user);
    }
  }

}
