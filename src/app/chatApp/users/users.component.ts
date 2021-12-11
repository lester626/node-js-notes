import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";
import {APIService} from "../../services/api.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User> = [];
  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.loadAllUsers()
  }

  loadAllUsers():void {
    this.apiService.getUsers()
      .then((response) => response.json())
      .then((response) => {
        this.users= response.data
      })
  }

}
