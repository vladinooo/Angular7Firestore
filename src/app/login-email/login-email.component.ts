import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css']
})
export class LoginEmailComponent implements OnInit {

  error: any;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data => {
      this.error = data;
    });
  }

  login(formData) {
    this.auth.login(formData.value);
  }

}
