import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {AddStudentComponent} from "./add-student/add-student.component";
import {ViewStudentsComponent} from "./view-students/view-students.component";
import {StudentProfileComponent} from "./student-profile/student-profile.component";
import {LoginComponent} from "./chatApp/login/login.component";
import {RegisterComponent} from "./chatApp/register/register.component";
import {UsersComponent} from "./chatApp/users/users.component";
import {ProfileComponent} from "./chatApp/profile/profile.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'students/add', component: AddStudentComponent},
  {path: 'students', component: ViewStudentsComponent},
  {path: 'student', component: StudentProfileComponent},
  {path: 'chat/users', component: UsersComponent},
  {path: 'chat/profile', component: ProfileComponent},
  {path: 'chat/login', component: LoginComponent},
  {path: 'chat/register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
