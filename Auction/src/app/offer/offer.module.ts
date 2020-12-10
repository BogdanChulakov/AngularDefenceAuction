import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { MyOfferComponent } from './my-offer/my-offer.component';
import { FormsModule } from '@angular/forms';
import { OfferRouterModule } from './offer-routing.module';
import { OfferService } from './offer.service';
import { OrderService } from '../order/order.service';



@NgModule({
  declarations: [
    CreateOfferComponent,
    MyOfferComponent],
  imports: [
    CommonModule,
    OfferRouterModule,
    FormsModule
  ],
  providers: [
    OrderService,
    OfferService
  ],
})
export class OfferModule { }
