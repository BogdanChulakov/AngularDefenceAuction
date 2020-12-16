import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/autentication/auth.service';
import { ItemModel } from 'src/app/item/models/item.model';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html',
  styleUrls: ['./details-item.component.css']
})
export class DetailsItemComponent implements OnInit {
  id: string;
  model: ItemModel;

  get isLogged(): boolean {
    return this.authService.isLogged;
  }
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private authService: AuthService) {
    this.model = new ItemModel('', '', '', 0, '');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
    this.itemService.getDetails(this.id).subscribe({
      next: (item: ItemModel) => {
        this.model = item;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
