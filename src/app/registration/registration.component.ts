import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  register() {
    if (this.name.trim() && this.email.trim() && this.password.trim()) {
      const newUser = {
        name: this.name,
        email: this.email,
        password: this.password
      };

      // Register the new user through the AuthService
      this.authService.registerUser(newUser);

      // Redirect to the login page after successful registration
      this.router.navigate(['/login']);
    }
  }

}
