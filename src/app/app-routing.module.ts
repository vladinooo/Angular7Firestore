import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import {AuthGuard} from './auth.guard';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import {SignupComponent} from './signup/signup.component';
// import {EmailComponent} from './email/email.component';
// import {MembersComponent} from './members/members.component';
// import {AuthGuard} from './auth.service';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'secret', component: SuperSecretComponent, canActivate: [AuthGuard] }
  // { path: 'login', component: LoginComponent},
  // { path: 'signup', component: SignupComponent},
  // { path: 'login-email', component: EmailComponent},
  // { path: 'members', component: MembersComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
