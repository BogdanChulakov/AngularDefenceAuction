import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/autentication/auth.service';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offerService: OfferService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params.itemId;

    });
    this.offerService.getAllOffers(this.itemId)
      .subscribe({
        next: (offers: any[]) => {
          this.allOffers = offers
        },
        error: (err) => {
          this.errorMessage = err.error;
        }
      })
  }

}