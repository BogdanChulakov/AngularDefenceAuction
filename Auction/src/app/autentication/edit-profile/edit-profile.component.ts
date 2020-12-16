import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { editModel } from '../models/edit.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  model: editModel;

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.model = new editModel('', '', '');
  }

  ngOnInit(): void {
    this.authService.getCurrentUserProfile().subscribe({
      next: (user: editModel) => {
        this.model = user;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  edit() {
    this.authService.updateProfile(this.model).subscribe({
      next: (user) => {
        this.router.navigate([`/profile`]);
      },
      error: (err) => {
        console.error(err);
      }
    })

  }

}
