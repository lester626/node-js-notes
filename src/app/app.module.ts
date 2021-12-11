import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsersComponent } from './chatApp/users/users.component';
import { RegisterComponent } from './chatApp/register/register.component';
import { LoginComponent } from './chatApp/login/login.component';
import { ProfileComponent } from './chatApp/profile/profile.component';
import { ChatComponent } from './chatApp/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AddStudentComponent,
    ViewStudentsComponent,
    StudentProfileComponent,
    UsersComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ChatComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
