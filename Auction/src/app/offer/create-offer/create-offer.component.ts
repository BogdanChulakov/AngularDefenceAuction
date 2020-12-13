import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/autentication/auth.service';
import { OfferModel } from 'src/app/autentication/models/offer.model';
import { ItemService } from 'src/app/item/item.service';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {

  itemId: string;
  model: OfferModel;
  isCreator: boolean;
  userId: string;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router,
    private offerService: OfferService,
    private authService: AuthService) {
    this.model = new OfferModel('', 0, 0, '');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params.itemId;

    })
    this.authService.getCurrentUserProfile().subscribe(user => {
      this.userId = user._id;
    })
    this.itemService.getDetails(this.itemId).subscribe({
      next: (order) => {
        if (order['userId'] === this.userId) {
          this.isCreator = true;
        } else {
          this.isCreator = false;
        }
        this.model.itemName = order['name'];
        this.model.price = order['price'];
        this.model.newPrice = order['price'];
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  createOffer() {
    this.offerService.create(this.model, this.itemId).subscribe({
      next: (offer) => {
        this.router.navigate([`/item/details/${this.itemId}`]);
      },
      error: (err) => {
        this.errorMessage=err.error;
      }
    })
  }
}
