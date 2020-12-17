import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-item.component.html',
  styleUrls: ['./my-item.component.css']
})
export class MyItemComponent implements OnInit {

  myActiveItems: any;
  expiredItems: any;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getMyItems().subscribe({
      next: (items) => {
        console.log(items)
        this.myActiveItems = items['activeItems'];
        this.expiredItems = items['expiredItems'];
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
