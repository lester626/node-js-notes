import { Injectable } from '@angular/core';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class APIService {
  apiUrl = "http://82.131.72.26:2016/api/v1";
  constructor() { }

  registerUser(user: User): Promise<Response>{
    return fetch(
      this.apiUrl + '/users/register',
      {
        method: 'POST', // GET | POST | PUT
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }
    )
  }

  signIn(user: User): Promise<Response>{
    return fetch(
      this.apiUrl + '/users/authenticate',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }
    )
  }

  getUsers(): Promise<Response>{
    return fetch(
      this.apiUrl + '/users',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
  }
}
