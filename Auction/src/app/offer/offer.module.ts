import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { FormsModule } from '@angular/forms';
import { OfferRouterModule } from './offer-routing.module';
import { OfferService } from './offer.service';
import { ItemService } from '../item/item.service';
import { MyOffersComponent } from './my-offers/my-offers.component';



@NgModule({
  declarations: [
    CreateOfferComponent,
    MyOffersComponent
  ],
  imports: [
    CommonModule,
    OfferRouterModule,
    FormsModule
  ],
  providers: [
    ItemService,
    OfferService
  ],
})
export class OfferModule { }
