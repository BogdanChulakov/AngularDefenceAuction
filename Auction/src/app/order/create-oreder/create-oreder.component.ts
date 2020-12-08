import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderModel } from 'src/app/autentication/models/order.model';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-create-oreder',
  templateUrl: './create-oreder.component.html',
  styleUrls: ['./create-oreder.component.css']
})
export class CreateOrederComponent implements OnInit {

  model: OrderModel;

  constructor(private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.model = new OrderModel('', '', '', 0 );
  }

  ngOnInit(): void {

  }
  create() {
    this.orderService.create(this.model).subscribe({
      next: (order) => {
        this.router.navigate([`/order/details/${order._id}`]);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
