import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginModel } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginModel;
  errMessage: string;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.model = new LoginModel('', '');
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.model).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (err) => {
        console.error(err);
        this.errMessage = err['error'].message;
      }
    })
    this.router.navigate(['']).then(x => {
      location.reload();
    });
  }
}
