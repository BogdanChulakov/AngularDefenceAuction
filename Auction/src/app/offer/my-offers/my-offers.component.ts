import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.css']
})
export class MyOffersComponent implements OnInit {

  offers: any[];

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerService.getMyOffers().subscribe((offers: any[]) => {
      this.offers = offers;
    })
  }

}
