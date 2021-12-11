import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddStudentsComponent} from "./add-students/add-students.component";
import {ViewStudentsComponent} from "./view-students/view-students.component";
import {StudentProfileComponent} from "./student-profile/student-profile.component";
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./chatApp/login/login.component";
import {RegisterComponent} from "./chatApp/register/register.component";
import {UsersComponent} from "./chatApp/users/users.component";
import {ProfileComponent} from "./chatApp/profile/profile.component";
import {ChatComponent} from "./chatApp/chat/chat.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'students/add', component: AddStudentsComponent},
  {path: 'students', component: ViewStudentsComponent},
  {path: 'student/profile', component: StudentProfileComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'chat/login', component: LoginComponent},
  {path: 'chat/users', component: UsersComponent},
  {path: 'chat/profile', component: ProfileComponent},
  {path: 'chat/register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
