import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.css']
})
export class DetailsOrderComponent implements OnInit {
  id: string;
  model: any;

  constructor(private route: ActivatedRoute,
    private orderService:OrderService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    })
    this.orderService.getDetails(this.id).subscribe({
      next: (order) => {
        this.model=order;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
