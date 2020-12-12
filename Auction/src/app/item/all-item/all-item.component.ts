import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/autentication/auth.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-all-item',
  templateUrl: './all-item.component.html',
  styleUrls: ['./all-item.component.css']
})
export class AllItemComponent implements OnInit {

  allItems:any;
  get isLogged(): boolean {
    return this.authService.isLogged;
  }

  constructor(
    private itemService: ItemService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.itemService.getAll().subscribe({
      next: (items) => {
        this.allItems = items;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
