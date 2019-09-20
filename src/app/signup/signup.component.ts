// import {Component, OnInit} from '@angular/core';
// import {AngularFire} from '@angular/fire';
// import {Router} from '@angular/router';
// import {fallIn, moveIn} from '../router.animations';
//
// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css'],
//   animations: [moveIn(), fallIn()],
//   host: {'[@moveIn]': ''}
// })
// export class SignupComponent implements OnInit {
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
//       this.angularFire.auth.createUser({
//         email: formData.value.email,
//         password: formData.value.password
//       }).then(
//         (success) => {
//           console.log(success);
//           this.router.navigate(['/members']);
//         }).catch(
//           (err) => {
//             this.error = err;
//         });
//     }
//   }
//
//   ngOnInit() {
//   }
//
// }
