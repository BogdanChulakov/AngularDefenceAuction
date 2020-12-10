import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/autentication/auth.service';
import { OrderModel } from 'src/app/autentication/models/order.model';
import { IOrder } from 'src/app/shared/interfaces';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.css']
})
export class DetailsOrderComponent implements OnInit {
  id: string;
  model: OrderModel;

  get isLogged(): boolean {
    return this.authService.isLogged;
  }
  constructor(
    private route: ActivatedRoute,
    private orderService:OrderService,
    private authService:AuthService) { 
      this.model=new OrderModel('','','',0);
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
    this.orderService.getDetails(this.id).subscribe({
      next: (order:OrderModel) => {
        this.model=order;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
