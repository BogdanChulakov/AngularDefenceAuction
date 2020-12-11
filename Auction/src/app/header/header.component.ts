import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../autentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email: string;
  get isLogged(): boolean {
    return this.authService.isLogged;
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logoutHandler(): void {
    this.email=null;
    this.authService.logout().subscribe(() => this.router.navigate(['/login']));
  }

  ngOnInit(): void {
    this.authService.getCurrentUserProfile().subscribe(user => {
      this.email = user.email;
    })
  }

}
