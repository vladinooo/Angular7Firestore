import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore,} from '@angular/fire/firestore';

import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<User>;

  private eventAuthError = new BehaviorSubject<string>('');
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any;
  userData: any;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private router: Router
  ) {
    /* Saving user data in localstorage when logged in
    and setting up null when logged out */
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // get (observable) of all info about currently logged in user
  getUserState() {
    return this.angularFireAuth.authState;
  }

  // Returns true when user is loged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  login(user) {
    this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .catch(error => {
        this.eventAuthError.next(error);
      }).then(userCredential => {
        if (userCredential) {
          this.router.navigate(['/home']);
        }
    });
  }

  createUser(user) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(userCredential => {
        this.newUser = user;

        userCredential.user.updateProfile({
          displayName: user.username
        });

        this.insertUserData(userCredential)
          .then(() => {
            this.router.navigate(['/login-email']);
          });
      }).catch(error => {
        this.eventAuthError.next(error);
    });
  }

  insertUserData(userCredential: firebase.auth.UserCredential) {
    return this.angularFirestore.doc(`Users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      role: 'basic user'
    });
  }

  logout() {
    return this.angularFireAuth.auth.signOut();
  }

  // private updateUserData(user) {
  //   // Sets user data to firestore on login
  //   const userRef: AngularFirestoreDocument<User> = this.angularFirestore.doc(`users/${user.uid}`);
  //
  //   const data = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL
  //   };
  //
  //   return userRef.set(data, { merge: true });
  //
  // }

}
