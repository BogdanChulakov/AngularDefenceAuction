import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferModel } from 'src/app/autentication/models/offer.model';
import { OrderService } from 'src/app/order/order.service';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {

  orderId: string;
  model: OfferModel;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router,
    private offerService: OfferService) {
    this.model = new OfferModel('', 0, 0, '');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.orderId = params.orderId;
    })
    this.orderService.getDetails(this.orderId).subscribe({
      next: (order) => {
        this.model.orderName = order['name'];
        this.model.price = order['price'];
        this.model.newPrice=order['price'];
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  createOffer() {
    this.offerService.create(this.model,this.orderId).subscribe({
      next: (offer) => {
        this.router.navigate([`/order/details/${this.orderId}`]);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
