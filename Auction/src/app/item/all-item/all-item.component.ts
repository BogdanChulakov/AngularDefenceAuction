import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/autentication/auth.service';
import { ItemService } from '../item.service';
import { SearchModel } from '../models/search.model';

@Component({
  selector: 'app-all-item',
  templateUrl: './all-item.component.html',
  styleUrls: ['./all-item.component.css']
})
export class AllItemComponent implements OnInit {

  allItems: any;
  get isLogged(): boolean {
    return this.authService.isLogged;
  }
  model: SearchModel;
  errorMessage: string;
  haveItems: boolean;
  haveSearchedItems: boolean;


  constructor(
    private itemService: ItemService,
    private authService: AuthService) {
    this.model = new SearchModel('')
  }

  ngOnInit(): void {
    this.itemService.getAll({}).subscribe({
      next: (items) => {

        this.allItems = items;
        if (this.allItems.length > 0) {
          this.haveItems = true;
          this.haveSearchedItems = true;
        }


      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  search() {
    console.log(this.model)
    this.itemService.getSearchItems(this.model).subscribe({
      next: (items) => {
        this.allItems = items;
        if (this.allItems.length == 0){
          this.haveSearchedItems = false;

        }else{
          this.haveSearchedItems=true;
        }
      },
      error: (err) => {
        this.errorMessage = err.error;
      }
    })
  }

}
