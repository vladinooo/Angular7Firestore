// import {Component, OnInit} from '@angular/core';
// import {AngularFireAuth, AuthMethods, AuthProviders} from '@angular/fire/auth';
// import {Router} from '@angular/router';
// import {moveIn} from '../router.animations';
//
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
//   animations: [moveIn()],
//   host: {'[@moveIn]':''}
// })
// export class LoginComponent implements OnInit {
//
//   error: any;
//   constructor(public angularFireAuth: AngularFireAuth, private router: Router) {
//     this.angularFireAuth.auth.subscribe(authorized => {
//       if (authorized) {
//         this.router.navigatByUrl('/members');
//       }
//     });
//   }
//
//   loginFacebook() {
//     this.angularFireAuth.auth.login({
//       provider: AuthProviders.Facebook,
//       method: AuthMethods.Popup
//     }).then(
//       (success) => {
//         this.router.navigate(['/members']);
//       }).catch(
//         (err) => {
//           this.error = err;
//       });
//   }
//
//   loginGoogle() {
//     this.angularFire.auth.login({
//       provider: AuthProviders.Google,
//       method: AuthMethods.Popup
//     }).then(
//       (success) => {
//         this.router.navigate(['/members']);
//       }).catch(
//       (err) => {
//         this.error = err;
//       });
//   }
//
//   ngOnInit() {
//   }
//
// }
