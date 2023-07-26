import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  
  constructor(private router: Router, private authService: AuthService) { }

  login() {
    const loggedIn = this.authService.login(this.email, this.password);

    if (loggedIn) {
      this.router.navigate(['/feed']);
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
