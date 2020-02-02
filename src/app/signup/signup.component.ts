import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  error: any;

  constructor(public auth: AuthService, private router: Router) {}

  createUser(formData) {
    this.auth.createUser(formData.value);
  }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data => {
      this.error = data;
    });
  }

}
