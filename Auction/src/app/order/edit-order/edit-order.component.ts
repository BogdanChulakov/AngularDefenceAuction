import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderModel } from 'src/app/autentication/models/order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  id: string;
  model: OrderModel;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {
    this.model = new OrderModel('', '', '', 0)
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
    this.orderService.getDetails(this.id).subscribe({
      next: (order: OrderModel) => {
        this.model = order;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  editOrder() { 
    this.orderService.edit(this.model, this.id).subscribe({
      next: (order) => {
        this.router.navigate([`/order/details/${this.id}`]);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
