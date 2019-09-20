// import { Component, OnInit } from '@angular/core';
// import {AngularFire, AuthMethods, AuthProviders} from '@angular/fire/auth';
// import {Router} from '@angular/router';
// import {fallIn, moveIn} from '../router.animations';
//
// @Component({
//   selector: 'app-email',
//   templateUrl: './email.component.html',
//   styleUrls: ['./email.component.css'],
//   animations: [moveIn(), fallIn()],
//   host: {'[@moveIn]': ''}
// })
// export class EmailComponent implements OnInit {
//
//   state: string;
//   error: any;
//
//   constructor(public angularFire: AngularFire, private router: Router) {
//     this.angularFire.auth.subscribe(authenticated => {
//       if (authenticated) {
//         this.router.navigateByUrl('/members');
//       }
//     });
//   }
//
//   onSubmit(formData) {
//     if (formData.valid) {
//       console.log(formData.value);
//       this.angularFire.auth.login({
//         email: formData.value.email,
//         password: formData.value.password
//       },
//         {
//           provider: AuthProviders.Password,
//           method: AuthMethods.Password
//         }).then(
//         (success) => {
//           console.log(success);
//           this.router.navigate(['/members']);
//         }).catch(
//         (err) => {
//           this.error = err;
//         });
//     }
//   }
//
//   ngOnInit() {
//   }
//
// }
