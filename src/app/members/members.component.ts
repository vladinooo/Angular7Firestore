// import { Component, OnInit } from '@angular/core';
// import {AngularFire, AuthMethods, AuthProviders} from '@angular/fire';
// import {Router} from '@angular/router';
// import {moveIn, fallIn, moveInLeft} from '../router.animations';
//
// @Component({
//   selector: 'app-members',
//   templateUrl: './members.component.html',
//   styleUrls: ['./members.component.css'],
//   animations: [moveIn(), fallIn(), moveInLeft()],
//   host: {'[@moveIn]': ''}
// })
// export class MembersComponent implements OnInit {
//
//   name: any;
//   state: string;
//
//   constructor(public angularFire: AngularFire, private router: Router) {
//     this.angularFire.auth.subscribe(authenticated => {
//       if (authenticated) {
//         this.name = authenticated;
//       }
//     });
//   }
//
//   logout() {
//     this.angularFire.auth.logout();
//     this.router.navigateByUrl('/login');
//   }
//
//   ngOnInit() {
//   }
//
// }
