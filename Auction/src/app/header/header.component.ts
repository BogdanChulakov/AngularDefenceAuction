import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../autentication/auth.service';
import { TranslateConfigService } from '../translate-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedLanguage:string;
  bg:boolean;
  en:boolean;
  email: string;
  get isLogged(): boolean {
    return this.authService.isLogged;
  }
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private traslateConfigService: TranslateConfigService
    ) { 
      this.selectedLanguage='bg';
      this.bg=true;
    }

  logoutHandler(): void {
    this.email=null;
    this.authService.logout().subscribe(() => this.router.navigate(['/login']));
  }

  ngOnInit(): void {
 
      this.authService.getCurrentUserProfile().subscribe(user => {
        this.email = user.email;
      })

  }

  changeLanguage(event) {
    this.selectedLanguage=event.target.value;
    this.traslateConfigService.changeLanguage(this.selectedLanguage);
     if(this.selectedLanguage=='bg'){
       this.bg=true;
       this.en=false;
     }else if(this.selectedLanguage=='en'){
      this.bg=false;
      this.en=true;
     }
  }

}
