import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employees/employee/employee.component';
import {SignupComponent} from './signup/signup.component';
import {LoginEmailComponent} from './login-email/login-email.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth.guard';
import {EmployeesComponent} from './employees/employees.component';
import {EmployeeListComponent} from './employees/employee-list/employee-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login-email', component: LoginEmailComponent},
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard]},
  { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard]},
  { path: 'employee-list', component: EmployeeListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
