import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-item.component.html',
  styleUrls: ['./my-item.component.css']
})
export class MyItemComponent implements OnInit {

  myItems: any;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getMyItems().subscribe({
      next: (items) => {
        this.myItems = items;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
