import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileInfo = {
    name: "Vincent",
    age: 23,
    city: "Makati",
    language: "English, Tagalog",
    profession: "Programmer"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
