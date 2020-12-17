import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/autentication/auth.service';
import { ItemService } from '../item.service';
import { DetailsModel } from '../models/details.model';


@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html',
  styleUrls: ['./details-item.component.css']
})
export class DetailsItemComponent implements OnInit {

  id: string;
  model: DetailsModel;
  isCreator: boolean;

  get isLogged(): boolean {
    return this.authService.isLogged;
  }

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private authService: AuthService) {
    this.model = new DetailsModel('', '', '', 0, '', '');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
    this.itemService.getDetails(this.id).subscribe({
      next: (item: DetailsModel) => {
        this.model = item;
        this.isCreator = this.authService.currentUser._id === item.userId;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
