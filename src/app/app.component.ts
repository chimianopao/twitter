import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLinks: boolean = true;
  title = 'twitter';
  constructor(private authService: AuthService, private router: Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current route to hide/show the links and button
        this.showLinks = !['/login', '/registration', '/'].includes(event.url);
      }
    });
  }
  
  onLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}