import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-item.component.html',
  styleUrls: ['./my-item.component.css']
})
export class MyItemComponent implements OnInit {

  myActiveItems: any[];
  expiredItems: any[];
  haveActiveItems: boolean;
  haveExpiredItems: boolean;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getMyItems().subscribe({
      next: (items) => {
        this.myActiveItems = items['activeItems'];
        if (items['activeItems'].length > 0)
          this.haveActiveItems = true;
        this.expiredItems = items['expiredItems'];
        if (items['expiredItems'].length > 0)
          this.haveExpiredItems = true;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
