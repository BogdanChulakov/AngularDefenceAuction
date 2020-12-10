import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/autentication/auth.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-all-order',
  templateUrl: './all-order.component.html',
  styleUrls: ['./all-order.component.css']
})
export class AllOrderComponent implements OnInit {

  allOrders:any;
  get isLogged(): boolean {
    return this.authService.isLogged;
  }

  constructor(
    private orderService: OrderService,
    private authService:AuthService) { }

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
