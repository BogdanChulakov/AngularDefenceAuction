import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/interfaces';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-all-order',
  templateUrl: './all-order.component.html',
  styleUrls: ['./all-order.component.css']
})
export class AllOrderComponent implements OnInit {

  allOrders:any;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getAll().subscribe({
      next: (orders) => {
        this.allOrders = orders;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
