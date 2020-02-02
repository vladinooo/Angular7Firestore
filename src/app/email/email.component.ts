// import { Component, OnInit } from '@angular/core';
// import {Router} from '@angular/router';
//
// @Component({
//   selector: 'app-email',
//   templateUrl: './email.component.html',
//   styleUrls: ['./email.component.css'],
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
