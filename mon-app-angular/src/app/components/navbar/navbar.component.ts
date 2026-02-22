import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService, User } from '../../services/auth.service';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  currentUser: User | null = null;
  sub?: Subscription

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ){
    this.updateAuthState();
  }

  ngOnInit(){
    this.updateAuthState();
    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.updateAuthState();
      });
  }
  
  ngOnDestroy(){
    this.sub?.unsubscribe();
  }

  updateAuthState(){
    this.isLoggedIn = !!this.authService.getToken();
    this.currentUser = this.authService.getCurrentUser();
  }

  logout(){
    this.authService.clearToken();
    this.router.navigate(['/login']);
  }
}
