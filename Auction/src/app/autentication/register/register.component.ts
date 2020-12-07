import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterModel } from '../models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterModel;

  constructor(
    private authService: AuthService,
    private pouter:Router) {
    this.model = new RegisterModel('', '', '', '');
  }

  ngOnInit(): void {
  }

  register() {
    console.log(this.model)
    this.authService.register(this.model).subscribe({
      next:() => {
      this.pouter.navigate(['']);
    },
    error:(err)=>{
      console.error(err);
    }
  })
  }

}
