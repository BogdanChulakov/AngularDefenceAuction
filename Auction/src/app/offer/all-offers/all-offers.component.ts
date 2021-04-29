import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.component.html',
  styleUrls: ['./all-offers.component.css']
})
export class AllOffersComponent implements OnInit {

  itemId: string;
  allOffers: any[];
  errorMessage: string;
  haveOffers: boolean;

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params.itemId;

    });
    this.offerService.getAllOffers(this.itemId)
      .subscribe({
        next: (offers: any[]) => {
          if (offers.length > 0)
            this.haveOffers = true;
          this.allOffers = offers
        },
        error: (err) => {
          this.errorMessage = err.error;
        }
      })
  }

}
