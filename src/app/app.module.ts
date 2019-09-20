import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import {EmployeeService} from './shared/employee.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// import { LoginComponent } from './login/login.component';
// import { EmailComponent } from './email/email.component';
// import { SignupComponent } from './signup/signup.component';
// import { MembersComponent } from './members/members.component';
import {routes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    // LoginComponent,
    // EmailComponent,
    // SignupComponent,
    // MembersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    routes
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
