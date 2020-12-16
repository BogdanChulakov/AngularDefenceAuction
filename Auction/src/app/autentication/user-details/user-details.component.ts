import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { detailsModel } from '../models/details.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: detailsModel;
  constructor(private authService: AuthService) {
    this.user = new detailsModel('', '', '','')
  }

  ngOnInit(): void {
    this.authService.getCurrentUserProfile().subscribe({
      next: (user: detailsModel) => {
        this.user = user;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
