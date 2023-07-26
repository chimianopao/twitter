import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser = 'currentUser';
  constructor(private router: Router) { }

  registerUser(user: any) {
    // Assuming the users are stored in an array in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUserByEmail(email: string) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find((user: any) => user.email === email);
  }

  login(email: string, password: string): boolean {
    const user = this.getUserByEmail(email);

    if (user && user.password === password) {
      // Successful login, set the logged-in user in localStorage
      localStorage.setItem(this.currentUser, JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }

  getLoggedInUser(): any {
    // Retrieve the logged-in user from localStorage
    const userString = localStorage.getItem(this.currentUser);
    return userString ? JSON.parse(userString) : null;
  }

  logout() {
    // Clear the logged-in user from localStorage on logout
    localStorage.removeItem(this.currentUser);
    
  }
}
